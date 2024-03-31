import React from 'react';

import WatchContent from "./_content";
import getSingleMovieSeries from '@/actions/getSingleMovieSeries';
import { getCurrentUser } from '@/actions/getCurrentUser';

interface WatchProps {
    params: {
        movieAndSeriesId: string;
    }
}

const Watch: React.FC<WatchProps> = async ({ params }) => {
    const movieAndSeriesData = await getSingleMovieSeries({ movieOrSeriesId: params?.movieAndSeriesId });
    const currentUser = await getCurrentUser();

    return (
        <WatchContent {...{ movieAndSeriesData , currentUser}} />
    )
}

export default Watch;