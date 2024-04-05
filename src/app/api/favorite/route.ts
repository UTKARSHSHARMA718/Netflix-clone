import { NextRequest, NextResponse } from "next/server";
import { without } from "lodash";

import prisma from "@/libs/prisma-db/prisma-db";
import { getCurrentUser } from "@/actions/getCurrentUser";

export async function POST(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();
    
    const body = await req.json();
    const moviesOrSeriesId = body?.id;

    const existingMovie = await prisma.movies.findUnique({
      where: {
        id: moviesOrSeriesId,
      },
    });

    if (!existingMovie) {
      return NextResponse?.json(
        { ok: false, message: "Invalid Id!", data: null },
        { status: 400 }
      );
    }

    const user = await prisma.user.update({
      where: {
        email: currentUser?.email || "",
      },
      data: {
        favoriteIds: {
          push: moviesOrSeriesId,
        },
      },
    });

    return NextResponse?.json(
      { ok: true, message: "movie/series marked as favorite", data: user },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error while marking movie/series as favorite: ", error);
    return NextResponse?.json(
      { ok: false, message: "Something went wrong!", data: null },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const currentUser = await getCurrentUser();

    const body = await req.json();
    const moviesOrSeriesId = body?.id;

    const existingMovie = await prisma.movies.findUnique({
      where: {
        id: moviesOrSeriesId,
      },
    });

    if (!existingMovie) {
      return NextResponse?.json(
        { ok: false, message: "Invalid Id!", data: null },
        { status: 400 }
      );
    }

    const updatedFavoriteIds = without(
      currentUser?.favoriteIds,
      moviesOrSeriesId
    );

    const updatedUser = await prisma.user.update({
      where: {
        email: currentUser?.email || "",
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });

    return NextResponse?.json(
      {
        ok: true,
        message: "movie/series removed from favorite list!",
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.log("Error while deleting favorite movie/series: " + err);
  }
}
