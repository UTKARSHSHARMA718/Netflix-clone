import React from 'react'

import ViewAllContainer from '@/containers/ViewAllContainer/ViewAllContainer'
import { getMoviesAndSeries } from '@/actions/getMoviesAndSeries'

const NewPopular = async () => {
    const allSeries = await getMoviesAndSeries({
        releasedAfter: 2020
    })

    return (
        <ViewAllContainer heading='All the new and popular movies/series can be found here' subHeading='Make sure you have a great time here.' data={allSeries} emptyDescription='Please check here after sometime.' emptyTitle='Nothing to show here!' />
    )
}

export default NewPopular