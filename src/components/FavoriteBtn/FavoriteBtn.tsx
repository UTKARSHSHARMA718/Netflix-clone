"use client"

import React, { useCallback, useContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

import { API, FAVORITE } from '@/constant/apiEndpoints';
import { GlobalContext } from '@/context/GlobalContext';
import { toast } from '@/containers/ToastProvider/ToastProvider';

interface FavoriteButtonProps {
    movieOrSeriesId: string,
    isFavorite: boolean | undefined;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieOrSeriesId, isFavorite }) => {
    const router = useRouter();
    const contextData: { reFetchUserData: () => void | null } = useContext(GlobalContext)!;
    const { reFetchUserData } = contextData;

    const toggleFavorites = useCallback(async () => {
        try {

            let response;
            const url = "/" + API + FAVORITE;
            if (isFavorite) {
                response = await axios.delete(url, { data: { id: movieOrSeriesId } });
            } else {
                response = await axios.post(url, { id: movieOrSeriesId });
            }
            if (response?.data?.ok) {
                reFetchUserData?.();
                router?.refresh();
                toast?.success(response?.data?.message);
                return;
            }
        } catch (err: any) {
            toast?.error(err?.response?.data?.message);
        }
    }, [movieOrSeriesId, isFavorite]);

    const Icon = isFavorite ? CheckIcon : PlusIcon;

    return (
        <div onClick={toggleFavorites} className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
            <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6 " />
        </div>
    )
}

export default FavoriteButton;