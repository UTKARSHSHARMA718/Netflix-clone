"use client";

import { useState } from "react";

import getSingleMovieSeries from "@/actions/getSingleMovieSeries";
import { MovieType } from "@/Types/SafeTypes";

const useGetMovieOrSeries = () => {
  const [data, setData] = useState<MovieType | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getMoviesOrSeriesData = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await getSingleMovieSeries({ movieOrSeriesId: id });
      console.log({res, id})
      setData(res);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, getMoviesOrSeriesData };
};

export default useGetMovieOrSeries;
