import React from 'react'
import { IconType } from 'react-icons';

interface CircularIconProps {
    icon: IconType,
    onClick?: () => void;
    size?: number;
}

const CircularIcon: React.FC<CircularIconProps> = ({ icon: Icon, onClick, size }) => {

    return (
        <div {...{ onClick }} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
            <Icon {...{ size }} />
        </div>
    )
}

export default CircularIcon