'use client'

import React, { useEffect, useState } from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";

import MovieAndSeriesCard from '../MovieAndSeriesCard/MovieAndSeriesCard';
import { MovieType } from '@/Types/SafeTypes';

import useScroll from '@/hooks/useScroll';
import styles from "./Slider.module.css"

interface SliderProps {
    data: MovieType[] | null | undefined;
    title: string;
}

const Slider: React.FC<SliderProps> = ({ data, title }) => {
    const { onScroll, isLeftArraowActive, isRightArraowActive, containerRef, checkScrollIsActive } = useScroll();

    const [isCardHovering, setIsCardHovering] = useState(false);

    const isShowArraows = !isRightArraowActive && !isLeftArraowActive;

    useEffect(() => checkScrollIsActive(), [data?.length])

    if (!data || !data.length) {
        return null;
    }

    return (
        <div className='px-10 flex flex-col gap-6'>
            <p className='text-2xl text-white font-semibold'>{title}</p>
            <div className='flex gap-6 items-center relative'>
                {isShowArraows ? null : <div className={`absolute bg-black ${isLeftArraowActive ? 'opacity-50 hover:opacity-70' : 'opacity-30 cursor-not-allowed'} min-w-[60px] z-40 flex justify-center items-center left-0 h-full `}>
                    <FaArrowCircleLeft onClick={() => onScroll('left')} className='left-4 z-30 w-[30px] text-white cursor-pointer' />
                </div>}
                <div className={`flex gap-8 items-center ${isCardHovering ? 'overflow-x-hidden overflow-y-visible' : 'overflow-x-auto'} ${styles.container}`} ref={containerRef}>
                    {
                        data?.map(item => {
                            return <MovieAndSeriesCard isFlowOverOnHover={false} key={item.id} data={item} onMouseOver={() => setIsCardHovering(true)} onMouseLeave={() => setIsCardHovering(false)} />
                        })
                    }
                </div>
                {isShowArraows ? null : <div className={`absolute bg-black ${isRightArraowActive ? 'opacity-50 hover:opacity-70' : 'opacity-30 cursor-not-allowed'} min-w-[60px] z-40 flex justify-center items-center right-0 h-full`}>
                    <FaArrowCircleLeft onClick={() => onScroll('right')} className='rotate-180 left-4 z-30 w-[30px] text-white cursor-pointer' />
                </div>}
            </div>
        </div>
    )
}

export default Slider