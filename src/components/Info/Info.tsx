import React from 'react';

interface InfoProps { title: string, value: string }

const Info: React.FC<InfoProps> = ({ title, value }) => {

    return (
        <p className="text-red-500 font-semibold capitalize">{title} : <span className='text-slate-300 text-sm lg:text-md'>{value}</span></p>
    )
}

export default Info;