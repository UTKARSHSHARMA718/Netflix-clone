"use server";

import prisma from "@/libs/prisma-db/prisma-db";
import { getCurrentUser } from "./getCurrentUser";

const getFavoriteMoviesSeries = async () => {
  try {
    const currentUser = await getCurrentUser();

    const favoritedMovies = await prisma?.movies.findMany({
      where: {
        id: {
          in: currentUser?.favoriteIds,
        },
      },
    });

    return favoritedMovies;
  } catch (error) {
    console.log("Error while getting favorited movies/series: " + error);
    return null;
  }
};

export default getFavoriteMoviesSeries;
