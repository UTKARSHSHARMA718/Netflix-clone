import React from 'react'

import ViewAllContainer from '@/containers/ViewAllContainer/ViewAllContainer'
import getFavoriteMoviesSeries from '@/actions/getFavoriteMoviesSeries'

const MyList = async () => {
    const allFavoriteMovieAndSeries = await getFavoriteMoviesSeries();

    return (
        <ViewAllContainer heading='All your favorite films and movies.' subHeading='Make sure you have a great time here.' data={allFavoriteMovieAndSeries} emptyDescription='Please add some movies and series as your favorite to see them here.' emptyTitle='Nothing to show here!' />
    )
}

export default MyList