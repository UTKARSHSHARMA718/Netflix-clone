import React from 'react'

import ViewAllContainer from '@/containers/ViewAllContainer/ViewAllContainer'
import { getMoviesAndSeries } from '@/actions/getMoviesAndSeries'
import { MOVIE_TYPE } from '@/constant/const'

const Films = async () => {
    const allFilms = await getMoviesAndSeries({
        type: MOVIE_TYPE
    })

    return (
        <ViewAllContainer heading='All the Films can be found here' subHeading='Make sure you have a great time here.' data={allFilms} emptyDescription='Please check here after sometime.' emptyTitle='Nothing to show here!' />
    )
}

export default Films