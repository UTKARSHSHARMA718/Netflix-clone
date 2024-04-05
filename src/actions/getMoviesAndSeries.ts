"use server";

import prisma from "@/libs/prisma-db/prisma-db";

interface IMoviesAndSeries {
  releasedAfter?: number;
  releasedBefore?: number;
  releasedOn?: string;
  directedBy?: string;
  cast?: string;
  title?: string;
  lang?: string;
  duration?: number;
  rating?: number;
  type?: string;
  genre?: string;
  resolution?: string;
}

export const getMoviesAndSeries = async (props?: IMoviesAndSeries) => {
  try {
    const releasedAfter = props?.releasedAfter;
    const releasedBefore = props?.releasedBefore;
    const directedBy = props?.directedBy;
    const cast = props?.cast;
    const title = props?.title;
    const lang = props?.lang;
    const duration = props?.duration;
    const rating = props?.rating;
    const type = props?.type;
    const genre = props?.genre;
    const resolution = props?.resolution;
    const releasedOn = props?.releasedOn;

    let query: any = {};

    if (releasedAfter && releasedBefore) {
      query.releasedOn = {
        gte: new Date(`${releasedAfter}-01-01T00:00:00.000Z`),
        lte: new Date(`${releasedBefore}-12-30T00:00:00.000Z`),
      };
    }

    if (releasedOn) {
      query.releasedOn = {
        gte: new Date(`${releasedOn}-01-01T00:00:00.000Z`),
        lte: new Date(`${releasedOn}-12-30T00:00:00.000Z`),
      };
    }

    if (directedBy) {
      query.directedBy = {
        has: directedBy,
      };
    }

    if (cast) {
      query.cast = {
        some: cast,
      };
    }

    if (title) {
      query.title = {
        contains: title,
        mode: "insensitive",
      };
    }

    if (lang) {
      query.langauges = {
        has: lang,
      };
    }

    if (duration) {
      query.minutes = {
        gte: duration,
      };
    }

    if (type) {
      query.type = {
        contains: type,
        mode: "insensitive",
      };
    }

    if (genre) {
      query.genre = {
        contains: genre,
        mode: "insensitive",
      };
    }

    if (resolution) {
      query.resolution = {
        has: resolution,
      };
    }

    if (rating) {
      query.rating = {
        gte: rating,
      };
    }

    const res = await prisma.movies.findMany({
      where: query,
      orderBy: [
        {
          releasedOn: "desc",
        },
      ],
    });

    return res;
  } catch (error: any) {
    console.log("Error while getting movies and series: " + error);
    return null;
  }
};
