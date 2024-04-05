import React from 'react'

import CommentsSection from '@/containers/CommentsSection/CommentsSection';
import Info from '@/components/Info/Info';
import MovieList from '@/components/MovieList/MovieList';
import StarRating from '@/components/StarRating/StarRating';

import getSingleMovieSeries from '@/actions/getSingleMovieSeries';
import { getMoviesAndSeries } from '@/actions/getMoviesAndSeries';
import { getCommaSepratedString, getFullLanguageName, getHumanReadableDate } from '@/libs/utils/utils';

interface DetailsProps {
    params: { movieOrSeriesId: string; }
}

const Details: React.FC<DetailsProps> = async ({ params }) => {
    const { movieOrSeriesId } = params;
    const data = await getSingleMovieSeries({ movieOrSeriesId });
    let similarShowsData = await getMoviesAndSeries({ genre: data?.genre })
    similarShowsData = similarShowsData?.filter(item => item?.id !== movieOrSeriesId) || [];

    const infoArray = [
        { title: "Title", value: data?.title },
        { title: "Genre", value: data?.genre },
        { title: "Duration", value: data?.duration },
        { title: "Cast", value: getCommaSepratedString(data?.cast!) },
        { title: "Released On", value: getHumanReadableDate(data?.releasedOn!) },
        { title: "Resolution", value: getCommaSepratedString(data?.resolution!) },
        { title: "Directed By", value: getCommaSepratedString(data?.directedBy!) },
        { title: "Type", value: data?.type },
        { title: "Langauges", value: getCommaSepratedString(data?.langauges?.map(v => getFullLanguageName(v))!) },
    ]

    return (
        <div className='max-w-[1200px] m-auto pt-20 rounded-xl overflow-hidden p-4 gap-8 flex flex-col'>
            <div>
                <video src={data?.videoUrl} className='rounded-xl h-full w-full' autoPlay controls />
                <div className='gap-4 py-5 grid grid-cols-1 md:grid-cols-2'>
                    {infoArray?.map(info => <Info title={info?.title} value={info?.value!} />)}
                    <StarRating rating={data?.rating!} isAlignVerticleForSmallScreens={false}/>
                </div>
                <div className='py-5'>
                    <Info title="Description" value={data?.description!} />
                </div>
            </div>
            <MovieList title='Similar Movies and Shows' data={similarShowsData?.slice(0, 4)} customStyles='p-0 md:p-0' />
            <CommentsSection movieOrSeriesId={data?.id} />
        </div>
    )
}

export default Details