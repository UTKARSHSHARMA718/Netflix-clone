
import { redirect } from "next/navigation";

import AppContent from "@/containers/AppContent/AppContent";
import Billboard from "@/components/Billboard/Billboard";
import Navbar from "@/containers/Navbar/Navbar";
import Slider from "@/components/Slider/Slider";

import getFavoriteMoviesSeries from "@/actions/getFavoriteMoviesSeries";
import { getMoviesAndSeries } from '@/actions/getMoviesAndSeries';
import { MOVIE_TYPE, SERIES_TYPE } from "@/constant/const";
import { getCurrentUser } from "@/actions/getCurrentUser";
import { AUTH } from "@/constant/routeNames";

export default async function Home() {
  const allMoviesAndSeries = await getMoviesAndSeries({});
  const myListData = await getFavoriteMoviesSeries();

  const allMovies = allMoviesAndSeries?.filter(item => item?.type === MOVIE_TYPE);
  const allSeries = allMoviesAndSeries?.filter(item => item?.type === SERIES_TYPE);
  const currentUser = await getCurrentUser();

  if(!currentUser){
    redirect(AUTH);
  }

  return (
    <>
      <AppContent />
      <Navbar {...{ currentUser }} />
      <Billboard {...{ allMoviesAndSeries }} />
      <div className="pb-40 flex flex-col gap-8 pt-8">
        <Slider title="New Trending movies" data={allMovies} />
        <Slider title="New Trending series" data={allSeries} />
        <Slider title="My List Items" data={myListData} />
      </div>
    </>
  )
}
