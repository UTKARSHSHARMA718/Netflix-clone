import React from 'react'

interface ButtonProps {
    label: string;
    onClick: () => void;
    isMarginTopRequired?: boolean;
    disabled?: boolean;
    customStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    isMarginTopRequired = true,
    disabled,
    customStyles,
}) => {
    return (
        <button {...{ onClick, disabled }} type='submit' className={`${customStyles} bg-red-600 px-2 md:py-3 text-white rounded-md w-full disabled:cursor-not-allowed disabled:bg-red-300 ${isMarginTopRequired ? "mt-10" : ""} hover:bg-red-700 transition`}>
            {label}
        </button>
    )
}

export default Button