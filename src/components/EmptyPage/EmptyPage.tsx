import React from 'react'

type EmptyPageProps={
    title?: string;
    description?: string;
}

const EmptyPage:React.FC<EmptyPageProps> = ({
    title,
    description,
}) => {

  return (
    <div className="
    w-full
    h-full
    flex
    flex-col
    items-start
    justify-center
    md:items-center
    gap-6
    p-6
    ">
        <p className="text-xl font-bold text-white">{title}</p>
        <div>
            <p className='text-md font-semibold text-slate-400'>{description}</p>
        </div>
    </div>
  )
}

export default EmptyPage