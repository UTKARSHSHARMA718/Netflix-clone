import React from 'react';
import { redirect } from 'next/navigation';

import WatchContent from "./_content";

import getSingleMovieSeries from '@/actions/getSingleMovieSeries';
import { getCurrentUser } from '@/actions/getCurrentUser';
import { AUTH } from '@/constant/routeNames';

interface WatchProps {
    params: {
        movieAndSeriesId: string;
    }
}

const Watch: React.FC<WatchProps> = async ({ params }) => {
    const movieAndSeriesData = await getSingleMovieSeries({ movieOrSeriesId: params?.movieAndSeriesId });
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect(AUTH);
    }

    return (
        <WatchContent {...{ movieAndSeriesData, currentUser }} />
    )
}

export default Watch;