"use server";

import prisma from "@/libs/prisma-db/prisma-db";

interface ISingleMovieSeries {
  movieOrSeriesId: string;
}

const getSingleMovieSeries = async ({
  movieOrSeriesId,
}: ISingleMovieSeries) => {
  try {
    if (typeof movieOrSeriesId !== "string"|| !movieOrSeriesId) {
      return null;
    }

    const moviesOrSeries = await prisma.movies.findUnique({
      where: {
        id: movieOrSeriesId,
      },
    });

    return moviesOrSeries;
  } catch (error) {
    console.log("Error while getting single movie/series: " + error);
    return null;
  }
};

export default getSingleMovieSeries;
