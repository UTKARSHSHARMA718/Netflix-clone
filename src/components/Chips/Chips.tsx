import React from 'react'

interface ChipsProps {
    label: string;
    onClick?: () => void;
    customStyles?: string;
}

const Chips: React.FC<ChipsProps> = ({ label, onClick, customStyles}) => {

    return (
        <div {...{ onClick }} className='px-2 py-1 bg-black w-fit rounded-lg'>
            <p className={`${customStyles} text-white font-medium`}>{label}</p>
        </div>
    )
}

export default Chips