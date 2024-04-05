"use client"

import React, { useCallback, useContext, useMemo } from 'react';
import dynamic from "next/dynamic";
import { InformationCircleIcon } from '@heroicons/react/24/outline';

import PlayButton from '@/components/PlayButton/PlayButton';
import { Movies } from '@prisma/client';
import { GlobalContext } from '@/context/GlobalContext';
import { getRandomId, showLimitedText } from '@/libs/utils/utils';
import { GlobalStateType } from '@/Types/ContextTypes';

interface BillboardProps {
    allMoviesAndSeries: Movies[] | null
}

const Billboard: React.FC<BillboardProps> = ({ allMoviesAndSeries }) => {
    const contextData: GlobalStateType = useContext(GlobalContext)!;
    const { setGlobalState } = contextData;

    if (!allMoviesAndSeries) {
        return <p>Something went wrong!</p>
    }

    const moviesSize = allMoviesAndSeries?.length;
    const data = useMemo(() => allMoviesAndSeries[Math.floor(getRandomId() % moviesSize)], []);

    const handleOpenModal = useCallback(() => {
        setGlobalState((prev: any) => {
            return {
                ...prev,
                movieOrSeriesId: data?.id,
                isInfoModalOpen: true,
            }
        })
    }, [data?.id]);



    return (
        <div className="relative h-[56.25vw]">
            <video poster={data?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={data?.videoUrl}></video>
            <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                    {data?.title}
                </p>
                <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                    {showLimitedText(data?.description, 120)}
                </p>
                <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                    <PlayButton movieOrSeriesId={data?.id} />
                    <button
                        onClick={handleOpenModal}
                        className="
                        bg-white
                        text-white
                        bg-opacity-30 
                        rounded-md 
                        py-1 md:py-2 
                        px-2 md:px-4
                        w-auto 
                        text-xs lg:text-lg 
                        font-semibold
                        flex
                        flex-row
                        items-center
                        hover:bg-opacity-20
                        transition
                        "
                    >
                        <InformationCircleIcon className="w-4 md:w-7 mr-1" />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default dynamic(() => Promise.resolve(Billboard), { ssr: false })