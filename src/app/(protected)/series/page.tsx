import React from 'react'

import ViewAllContainer from '@/containers/ViewAllContainer/ViewAllContainer'
import { getMoviesAndSeries } from '@/actions/getMoviesAndSeries'
import { SERIES_TYPE } from '@/constant/const'

const Series = async () => {
    const allSeries = await getMoviesAndSeries({
        type: SERIES_TYPE
    })

    return (
        <ViewAllContainer heading='All the Series can be found here' subHeading='Make sure you have a great time here.' data={allSeries} emptyDescription='Please check here after sometime.' emptyTitle='Nothing to show here!' />
    )
}

export default Series