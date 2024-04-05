import React from 'react'

type GridViewProps = {
    children: React.ReactElement | null;
}

const GridView: React.FC<GridViewProps> = (props) => {
    const { children } = props;

    return (
        // @ts-ignore
        <div className="
        p-6
        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        gap-14
        ">
            {children}
        </div>
    )
}

export default GridView;
