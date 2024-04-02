import { useState } from "react";

import { getMoviesAndSeries } from "@/actions/getMoviesAndSeries";
import { MovieType } from "@/Types/SafeTypes";

const useFilteredMoviesSeries = () => {
  const [data, setData] = useState<MovieType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onFilterApplyHanlder = async (filters: any) => {
    setIsLoading(true);
    try {
      const res = await getMoviesAndSeries(filters);
      setData(res);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { onFilterApplyHanlder, data, error, isLoading };
};

export default useFilteredMoviesSeries;
