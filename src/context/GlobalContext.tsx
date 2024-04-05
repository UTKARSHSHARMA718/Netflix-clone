"use client";

import { createContext, useEffect, useState } from "react";

import { DUMMY_COMMENTS_DATA } from "@/constant/dummyCommentsData";
import useGetCurrentUser from "@/hooks/useGetCuurentUser";

export const GlobalContext = createContext(null);

interface IGlobalProvider {
  children: React.ReactNode;
}

const GlobalProvider = ({ children }: IGlobalProvider) => {
  const [globalState, setGlobalState] = useState({
    isInfoModalOpen: false,
    movieOrSeriesId: null,
    commentsData: DUMMY_COMMENTS_DATA,
    userData: null,
  });

  const { getCurrentUserData } = useGetCurrentUser();

  const reFetchUserData = () => {
    getCurrentUserData((data) => {
      setGlobalState((prev: any) => {
        return {
          ...prev,
          userData: data,
        }
      });
    });
  }

  useEffect(() => {
    reFetchUserData();
  }, [])

  // @ts-ignore
  return <GlobalContext.Provider value={{ globalState, setGlobalState, reFetchUserData }}>{children} </GlobalContext.Provider>;
};

export default GlobalProvider;
