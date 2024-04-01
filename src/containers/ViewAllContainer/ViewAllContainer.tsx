import React from 'react'

import EmptyPage from '@/components/EmptyPage/EmptyPage'
import GridView from '@/components/GridView/GridView'
import Header from '@/components/Headers/Heading'
import MovieAndSeriesCard from '@/components/MovieAndSeriesCard/MovieAndSeriesCard'
import { MovieType } from '@/Types/SafeTypes'
import styles from './ViewAllContainer.module.css'

interface ViewAllContainerProps {
    data: MovieType[] | null | [],
    heading: string;
    subHeading: string;
    emptyTitle: string;
    emptyDescription: string;
}

const ViewAllContainer: React.FC<ViewAllContainerProps> = ({ data, heading, subHeading, emptyDescription, emptyTitle }) => {

    if (!data || !data?.length) {
        return <EmptyPage title={emptyTitle} description={emptyDescription} />
    }

    return (
        <div className={`flex flex-col gap-8 p-6 ${styles.container}`}>
            <Header {...{ heading, subHeading }} isHeadingCenter isSubHeadingCenter customHeadingStyles='text-white' />
            <GridView>
                <>
                    {
                        data?.map(item => {
                            return <MovieAndSeriesCard data={item} />
                        })
                    }
                </>
            </GridView>
        </div>
    )
}

export default ViewAllContainer