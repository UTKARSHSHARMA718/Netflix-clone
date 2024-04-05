import React from 'react'

interface ChipsProps {
    label: string;
    onClick?: () => void;
    customStyles?: string;
    isCursorPointerRequired?: boolean;
}

const Chips: React.FC<ChipsProps> = ({ label, onClick, customStyles, isCursorPointerRequired }) => {

    return (
        <div {...{ onClick }} className='px-2 py-1 bg-black w-fit rounded-lg'>
            <p className={`${customStyles ? customStyles : 'text-white'} font-medium ${isCursorPointerRequired ? "cursor-pointer" : ""}`}>{label}</p>
        </div>
    )
}

export default Chips