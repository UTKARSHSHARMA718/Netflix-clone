"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

import { AUTH, HOME } from '@/constant/routeNames';
import { MovieType, SafeUser } from '@/Types/SafeTypes';

interface WatchContentProps {
    movieAndSeriesData: MovieType | null;
    currentUser: SafeUser | null;
}

const WatchContent: React.FC<WatchContentProps> = ({ movieAndSeriesData, currentUser }) => {
    const router = useRouter();

    if (!currentUser) {
        router?.push(AUTH);
        return;
    }

    return (
        <div className="h-screen w-screen bg-black">
            <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
                <ArrowLeftIcon onClick={() => router.push(HOME)} className="w-4 md:w-10 text-white cursor-pointer hover:opacity-80 transition" />
                <p className="text-white text-1xl md:text-3xl font-bold">
                    <span className="font-light">Watching:</span> {movieAndSeriesData?.title}
                </p>
            </nav>
            <video className="h-full w-full" autoPlay controls src={movieAndSeriesData?.videoUrl}></video>
        </div>
    )
}

export default WatchContent