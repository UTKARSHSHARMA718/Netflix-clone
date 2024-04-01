"use client"

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

import useGetCurrentUser from '@/hooks/useGetCuurentUser';
import { API, FAVORITE } from '@/constant/apiEndpoints';

interface FavoriteButtonProps {
    movieOrSeriesId: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieOrSeriesId }) => {
    const router = useRouter();

    const { userData, getCurrentUserData } = useGetCurrentUser();

    const isFavorite = userData?.favoriteIds?.includes(movieOrSeriesId);

    const toggleFavorites = useCallback(async () => {
        let response;
        const url = API + FAVORITE;
        if (isFavorite) {
            response = await axios.delete(url, { data: { id: movieOrSeriesId } });
        } else {
            response = await axios.post(url, { id: movieOrSeriesId });
        }
        getCurrentUserData();
        router?.refresh();
    }, [movieOrSeriesId, isFavorite, userData]);

    const Icon = isFavorite ? CheckIcon : PlusIcon;

    useEffect(() => {
        getCurrentUserData();
    }, [])

    return (
        <div onClick={toggleFavorites} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6 min-w-[36px]"/>
        </div>
    )
}

export default FavoriteButton;