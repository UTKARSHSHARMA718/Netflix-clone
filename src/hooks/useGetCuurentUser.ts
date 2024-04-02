"use client";

import { useState } from "react";

import { SafeUser } from "@/Types/SafeTypes";
import { getCurrentUser } from "@/actions/getCurrentUser";

const useGetCurrentUser = () => {
  const [userData, setUserData] = useState<SafeUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getCurrentUserData = async () => {
    setIsLoading(true);
    try {
      const res = await getCurrentUser();
      setUserData(res);
    } catch (err: any) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { userData, getCurrentUserData, isLoading, error };
};

export default useGetCurrentUser;
