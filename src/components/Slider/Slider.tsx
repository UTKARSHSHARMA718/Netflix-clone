'use client'

import React, { useEffect, useRef, useState } from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";

import MovieAndSeriesCard from '../MovieAndSeriesCard/MovieAndSeriesCard';
import { MovieType } from '@/Types/SafeTypes';
import { SCROLL_BY } from '@/constant/const';
import styles from "./Slider.module.css"
import useScroll from '@/hooks/useScroll';

interface SliderProps {
    data: MovieType[] | null | undefined;
    title: string;
}

const Slider: React.FC<SliderProps> = ({ data, title }) => {
    const { onScroll, isLeftArraowActive, isRightArraowActive, containerRef } = useScroll();

    return (
        <div className='px-10 flex flex-col gap-6'>
            <p className='text-2xl text-white font-semibold'>{title}</p>
            <div className='flex gap-6 items-center relative'>
                {isLeftArraowActive && <div className='absolute bg-black opacity-40 min-w-[60px] z-40 flex justify-center items-center left-0 h-full hover:opacity-70'>
                    <FaArrowCircleLeft onClick={() => onScroll('left')} className='left-4 z-30 w-[30px] text-white cursor-pointer' />
                </div>}
                <div className={`flex gap-8 items-center overflow-x-auto ${styles.container}`} ref={containerRef}>
                    {
                        data?.map(item => {
                            return <MovieAndSeriesCard key={item.id} data={item} />
                        })
                    }
                </div>
                {isRightArraowActive && <div className='absolute bg-black opacity-40 min-w-[60px] z-40 flex justify-center items-center right-0 h-full hover:opacity-70'>
                    <FaArrowCircleLeft onClick={() => onScroll('right')} className='rotate-180 left-4 z-30 w-[30px] text-white cursor-pointer' />
                </div>}
            </div>
        </div>
    )
}

export default Slider