import Billboard from "@/components/Billboard/Billboard";
import Navbar from "@/containers/Navbar/Navbar";
import { getMoviesAndSeries } from '@/actions/getMoviesAndSeries';

export default async function Home() {
  const allMoviesAndSeries = await getMoviesAndSeries({
    genre:"comed",
  });

  return (
    <>
      <Navbar />
      <Billboard {...{ allMoviesAndSeries }} />
    </>
  )
}
