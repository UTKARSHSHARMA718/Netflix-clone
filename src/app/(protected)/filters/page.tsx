'use client'

import React, { useState } from 'react'

import Button from '@/components/Button/Button';
import Chips from '@/components/Chips/Chips';
import EmptyPage from '@/components/EmptyPage/EmptyPage';
import Heading from '@/components/Headers/Heading';
import MovieList from '@/components/MovieList/MovieList';
import Select from '@/components/Select/Select';
import StarRating from '@/components/StarRating/StarRating';

import useFilteredMoviesSeries from '@/hooks/useFilteredMoviesSeries';
import { compareStrings, getDuration } from '@/libs/utils/utils';
import { AVAILABLE_RESOLUTIONS_OPTIONS, AVAILABLE_YEARS, DIRECTOR_OPTIONS_ARRAY, GENRE_OPTIONS_ARRAY, LANGUAGES_OPTIONS_ARRAY, MOVIE_TYPE, SERIES_TYPE } from '@/constant/const';

const FiltersPage = () => {
    const [rating, setRating] = useState(1);
    const [langauge, setLanguage] = useState("");
    const [resolution, setResolution] = useState("1080p");
    const [directedBy, setDirectedBy] = useState("");
    const [releasedAfter, setReleasedAfter] = useState(1950);
    const [releasedBefore, setReleasedBefore] = useState(2024);
    const [genre, setGenre] = useState("");
    const [duration, setDuration] = useState(1);
    const [type, setType] = useState(MOVIE_TYPE);

    const { onFilterApplyHanlder, data, } = useFilteredMoviesSeries();

    const selectedChipStyles = 'text-red-700';

    const onFilterApply = () => {
        onFilterApplyHanlder({
            rating,
            lang: langauge,
            resolution: (resolution?.substring(0, resolution?.length - 1)),
            directedBy,
            releasedAfter: +releasedAfter,
            releasedBefore: +releasedBefore,
            genre,
            duration: +duration,
            type
        });
    }
    console.log({ type })

    return (
        <div className='pt-40 pb-40 flex flex-col gap-9'>
            <div className='p-4 flex flex-col gap-8'>
                <Heading heading='Filters' subHeading='Search movie/series by filters' customHeadingStyles='text-white' isHeadingCenter isSubHeadingCenter />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 m-auto max-w-[800px] p-6 rounded-xl shadow-md shadow-red-400 w-5/6'>
                    <Select options={LANGUAGES_OPTIONS_ARRAY} title='Languages' onChange={setLanguage} value={langauge} />
                    <Select options={GENRE_OPTIONS_ARRAY} title='Genre' onChange={setGenre} value={genre} />
                    <Select options={DIRECTOR_OPTIONS_ARRAY} title='Directed By' onChange={setDirectedBy} value={directedBy} />
                    <div className='flex gap-6 items-center flex-col md:flex-row'>
                        <p className='text-red-500 font-semibold capitalize'>Resolution:</p>
                        <div className='flex gap-6 items-center'>
                            {AVAILABLE_RESOLUTIONS_OPTIONS?.map(resolutionItem => {
                                return <Chips isCursorPointerRequired onClick={() => setResolution(resolutionItem)} label={resolutionItem} customStyles={compareStrings(resolutionItem, resolution) ? selectedChipStyles : ""} key={resolutionItem}/>
                            })}
                        </div>
                    </div>
                    <div className='flex gap-6 items-center flex-col md:flex-row'>
                        <p className='text-red-500 font-semibold capitalize'>Type:</p>
                        <div className='flex gap-6 items-center'>
                            <Chips isCursorPointerRequired label='Movie' onClick={() => setType(MOVIE_TYPE)} customStyles={compareStrings(MOVIE_TYPE, type) ? selectedChipStyles : ""} />
                            <Chips isCursorPointerRequired label='Series' onClick={() => setType(SERIES_TYPE)} customStyles={compareStrings(SERIES_TYPE, type) ? selectedChipStyles : ""} />
                        </div>
                    </div>
                    <StarRating {...{ rating }} onClick={setRating} />
                    <div className='flex gap-6 items-center flex-col md:flex-row'>
                        <div className='flex flex-col min-w-[90px]'>
                            <p className='text-red-500 font-semibold capitalize'>Duration:</p>
                            <p className='text-white font-medium text-xs'>({getDuration(duration)})</p>
                        </div>
                        <div className='w-full'>
                            <input type="range" min="0" max="240" value={duration}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDuration(+e?.target?.value)}
                                className='min-w-[200px] w-full accent-red-600'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <Select title='Released After' options={AVAILABLE_YEARS.filter(year => year?.value <= +releasedBefore)} onChange={setReleasedAfter} customStyles='justify-between' value={releasedAfter} />
                        <Select title='Released Before' options={AVAILABLE_YEARS.filter(year => year?.value >= +releasedAfter)} onChange={setReleasedBefore} customStyles='justify-between' value={releasedBefore} />
                    </div>
                </div>
                <Button label='Apply' onClick={onFilterApply} customStyles='w-fit p-3 font-bold min-w-[100px] m-auto max-w-[200px]' />
            </div>
            <hr />
            {
                !!data?.length ?
                    <MovieList title='Filter results' {...{ data }} />
                    :
                    <EmptyPage title='Nothing found!' description='Please try changing some filters.' />
            }
        </div>
    )
}

export default FiltersPage