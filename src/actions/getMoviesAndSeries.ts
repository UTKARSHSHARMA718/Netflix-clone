import prisma from "@/libs/prisma-db/prisma-db";

interface IMoviesAndSeries {
  releasedAfter?: Date;
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
    console.log("starting....");
    const releasedAfter = props?.releasedAfter;
    const directedBy = props?.directedBy;
    const cast = props?.cast;
    const title = props?.title;
    const lang = props?.lang;
    const duration = props?.duration;
    const rating = props?.rating;
    const type = props?.type;
    const genre = props?.genre;
    const resolution = props?.resolution;

    let query: any = {};

    if (releasedAfter) {
      query.releasedOn = {
        gte: releasedAfter,
      };
    }

    // if (directedBy) {
    //   query.directedBy = {
    //     some: {
    //       contains: directedBy,
    //       mode: "insensitive",
    //     },
    //   };
    // }

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
      query.languages = {
        some: lang,
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
      };;
    }

    if (genre) {
      query.genre = {
        contains: genre,
        mode: "insensitive",
      };
    }

    if (resolution) {
      query.resolution = {
        some: resolution,
      };
    }

    if (rating) {
      query.rating = {
        gte: rating,
      };
    }

    console.log("starting.... 111");
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
    console.log("starting....222");
    console.log("Error while getting movies and series: " + error);
    return null;
  }
};
