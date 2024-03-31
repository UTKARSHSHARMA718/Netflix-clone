"use client";

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

interface IGlobalProvider {
  children: React.ReactNode;
}

const GlobalProvider = ({ children }: IGlobalProvider) => {
  const [globalState, setGlobalState] = useState({
    isInfoModalOpen: false,
    movieOrSeriesId: null,
  });

  // @ts-ignore
  return <GlobalContext.Provider value={{globalState, setGlobalState}}>{children} </GlobalContext.Provider>;
};

export default GlobalProvider;
