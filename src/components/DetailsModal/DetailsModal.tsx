"use client"

import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { XMarkIcon } from '@heroicons/react/24/outline';

import Button from '../Button/Button';
import FavoriteButton from '@/components/FavoriteBtn/FavoriteBtn';
import PlayButton from '@/components/PlayButton/PlayButton';

import useGetMovieOrSeries from '@/hooks/useGetMovieOrSeries';
import { showLimitedText } from '@/libs/utils/utils';
import { GlobalContext } from '@/context/GlobalContext';
import { DETAILS } from '@/constant/routeNames';
import { TRANSITION_TIME } from '@/constant/const';

interface DetailsModal {
    visible?: boolean;
    onClose: any;
}

const DetailsModal: React.FC<DetailsModal> = ({ visible, onClose }) => {
    const [isVisible, setIsVisible] = useState<boolean>(!!visible);
    const router = useRouter();
    // @ts-ignore
    const { globalState, setGlobalState } = useContext(GlobalContext);
    const { getMoviesOrSeriesData, data, isLoading } = useGetMovieOrSeries();

    const moviesOrSeriesId = globalState?.movieOrSeriesId;
    const isFavorite = globalState?.userData?.favoriteIds?.includes(moviesOrSeriesId);

    useEffect(() => {
        setIsVisible(!!visible);
        getMoviesOrSeriesData(moviesOrSeriesId);
    }, [visible]);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, TRANSITION_TIME);
    }, [onClose]);

    const visitHandler = () => {
        setGlobalState((prev: any) => {
            return {
                ...prev,
                isInfoModalOpen: false,
                movieOrSeriesId: null,
            }
        });
        router?.push(`${DETAILS}/${data?.id}`)
    }

    if (!visible) {
        return null;
    }

    if (isLoading) {
        return <p className='text-white font-bold text-lg'>Loading....</p>
    }

    return (
        <div className="z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0">
            <div className="relative md:w-auto w-11/12 mx-auto max-w-3xl overflow-hidden mt-16">
                <div className={`${isVisible ? 'scale-100' : 'scale-0'} transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}>
                    <div className="relative h-64 md:h-96">
                        <video poster={data?.thumbnailUrl} autoPlay muted loop src={data?.videoUrl} className="w-full brightness-[60%] object-cover h-full" />
                        <div onClick={handleClose} className="cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center">
                            <XMarkIcon className="text-white w-6" />
                        </div>
                        <div className="absolute bottom-[10%] left-4 md:left-10 w-full">
                            <p className="text-white text-lg sm:text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-4 md:mb-8 overflow-hidden text-ellipsis whitespace-nowrap w-5/6">
                                {data?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton movieOrSeriesId={data?.id || ""} />
                                <div>
                                    <Button label='Visit' onClick={visitHandler} isMarginTopRequired={false} customStyles='px-4 py-0 md:py-3' />
                                </div>
                                <FavoriteButton movieOrSeriesId={data?.id || ""} {...{ isFavorite }} />
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:px-12 md:py-8">
                        <div className="flex flex-col gap-2 mb-8 md:flex-row items-start justify-start">
                            <p className="text-green-400 font-semibold text-sm md:text-lg">
                                New
                            </p>
                            <p className="text-white text-sm md:text-lg">
                                {data?.duration}
                            </p>
                            <p className="text-red-500 font-semibold text-sm md:text-lg capitalize ">
                                {data?.genre}
                            </p>
                        </div>
                        <p className="text-white text-sm md:text-lg">
                            {showLimitedText(data?.description || "", 200)}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DetailsModal;