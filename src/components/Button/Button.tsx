import React from 'react'

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}) => {
    return (
        <button {...{ onClick }} className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
            {label}
        </button>
    )
}

export default Button