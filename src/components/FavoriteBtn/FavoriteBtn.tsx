import React from 'react';
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';

interface FavoriteButtonProps {
    isFavorite: boolean | undefined;
    onClick: () => void;
    disabled?: boolean;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onClick, disabled }) => {
    const Icon = isFavorite ? CheckIcon : PlusIcon;

    return (
        <div {...{ onClick, }} aria-disabled={disabled} className={`${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"} group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300`}>
            <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" aria-disabled={disabled} />
        </div>
    )
}

export default FavoriteButton;