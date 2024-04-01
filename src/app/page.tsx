
import AppContent from "@/containers/AppContent/AppContent";
import Billboard from "@/components/Billboard/Billboard";
import MovieList from "@/components/MovieList/MovieList";
import Navbar from "@/containers/Navbar/Navbar";
import getFavoriteMoviesSeries from "@/actions/getFavoriteMoviesSeries";
import { getMoviesAndSeries } from '@/actions/getMoviesAndSeries';
import { MOVIE_TYPE, SERIES_TYPE } from "@/constant/const";
import { getCurrentUser } from "@/actions/getCurrentUser";

export default async function Home() {
  const allMoviesAndSeries = await getMoviesAndSeries({});
  const myListData = await getFavoriteMoviesSeries();

  const allMovies = allMoviesAndSeries?.filter(item => item?.type === MOVIE_TYPE);
  const allSeries = allMoviesAndSeries?.filter(item => item?.type === SERIES_TYPE);
  const currentUser = await getCurrentUser();

  return (
    <>
      <AppContent />
      <Navbar {...{ currentUser }} />
      <Billboard {...{ allMoviesAndSeries }} />
      <div className="pb-40">
        <MovieList title="New Trending movies" data={allMovies} />
        <MovieList title="New Trending series" data={allSeries} />
        <MovieList title="My List Items" data={myListData} />
      </div>
    </>
  )
}
