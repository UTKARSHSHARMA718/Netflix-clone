"use client"

import React, { useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { PlayIcon } from '@heroicons/react/24/solid';

import FavoriteButton from '@/components/FavoriteBtn/FavoriteBtn';
import { MovieType } from '@/Types/SafeTypes';
import { GlobalContext } from '@/context/GlobalContext';
import { GlobalStateType } from '@/Types/ContextTypes';
import { WATCH } from '@/constant/routeNames';

interface MovieCardProps {
    data: MovieType;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    isFlowOverOnHover?: boolean;
}

const MovieAndSeriesCard: React.FC<MovieCardProps> = ({ data, onMouseOver, onMouseLeave, isFlowOverOnHover = true }) => {
    const router = useRouter();
    const contextData: GlobalStateType = useContext(GlobalContext)!
    const { globalState, setGlobalState } = contextData;
    const movieOrSeriesYear = new Date(data?.releasedOn)?.getFullYear();

    const isFavorite = globalState?.userData?.favoriteIds?.includes(data?.id);

    const redirectToWatch = useCallback(() => router.push(`${WATCH}/${data.id}`), [router, data.id]);

    const handleOpenDetailedModal = () => {
        setGlobalState((prev: any) => ({ ...prev, movieOrSeriesId: data?.id, isInfoModalOpen: true }))
    }

    return (
        <div className="group bg-zinc-900 col-span relative h-[12vw] min-h-[200px] min-w-[250px] w-1/4" {...{ onMouseOver, onMouseLeave }} >
            <img onClick={isFlowOverOnHover ? redirectToWatch : handleOpenDetailedModal} src={data.thumbnailUrl} alt="Movie" draggable={false} {...{ onMouseOver }} className={`
                cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-md
                group-hover:opacity-90
                ${isFlowOverOnHover ? `sm:group-hover:opacity-0` : "group-hover:scale-110"}
                delay-300
                w-full
                h-[12vw]
                min-h-[200px]
                z-20
                `} />
            <div className={`
                opacity-0
                absolute
                top-0
                transition
                duration-200
                z-[55]
                invisible
                sm:visible
                delay-300
                w-full
                max-w-[240px]
                scale-0
                ${isFlowOverOnHover ? `group-hover:scale-100
                group-hover:-translate-y-[5vw]
                group-hover:translate-x-[0vw]
                group-hover:opacity-100`: ''}
                `}>
                <img onClick={isFlowOverOnHover ? redirectToWatch : handleOpenDetailedModal} src={data?.thumbnailUrl} alt="Movie" draggable={false} className="
                cursor-pointer
                object-cover
                transition
                duration
                shadow-xl
                rounded-t-md
                w-full
                h-[12vw]
                " />
                <div className="
                    z-10
                  bg-zinc-800
                    p-2
                    lg:p-4
                    absolute
                    w-full
                    transition
                    shadow-md
                    rounded-b-md
                    ">
                    <div className="flex flex-row items-center gap-2">
                        <div onClick={isFlowOverOnHover ? redirectToWatch : handleOpenDetailedModal} className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
                            <PlayIcon className="text-black w-4 lg:w-6" />
                        </div>
                        <FavoriteButton movieOrSeriesId={data?.id} {...{ isFavorite }} />
                        {/* @ts-ignore */}
                        <div onClick={handleOpenDetailedModal} className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
                            <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4" />
                        </div>
                    </div>
                    <p className="text-green-400 font-semibold mt-4">
                        {movieOrSeriesYear >= 2020 ? "New" : "Old"} <span className="text-white">{movieOrSeriesYear}</span>
                    </p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-white text-[10px] lg:text-sm">{data?.duration}</p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-4 text-[8px] text-white lg:text-sm">
                        <p>{data?.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieAndSeriesCard;