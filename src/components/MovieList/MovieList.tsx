import React from 'react';

import { MovieType } from '@/Types/SafeTypes';
import MovieAndSeriesCard from '@/components/MovieAndSeriesCard/MovieAndSeriesCard';
import { isEmpty } from 'lodash';

interface MovieListProps {
    data: MovieType[] | null | undefined;
    title: string;
    customStyles?: string;
}

const MovieList: React.FC<MovieListProps> = ({ data, title, customStyles }) => {
    if (isEmpty(data)) {
        return null;
    }

    return (
        <div className={`${customStyles ?? "md:px-12"} px-4 mt-4 space-y-8 py-4`}>
            <>
                <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14">
                    {data?.map((movieOrSeries) => (
                        <MovieAndSeriesCard key={movieOrSeries.id} data={movieOrSeries} />
                    ))}
                </div>
            </>
        </div>
    );
}

export default MovieList;