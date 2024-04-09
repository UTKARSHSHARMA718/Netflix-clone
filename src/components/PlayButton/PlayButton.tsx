"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { PlayIcon } from '@heroicons/react/24/solid';

interface PlayButtonProps {
  movieOrSeriesId: string;
  disabled?: boolean;
}

const PlayButton: React.FC<PlayButtonProps> = ({ movieOrSeriesId, disabled }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieOrSeriesId}`)}
      {...{ disabled }}
      className="
        bg-white 
        rounded-md 
        py-2 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        "
    >
      <PlayIcon className="w-4 md:w-7 text-black mr-1" />
      Play
    </button>
  );
}

export default PlayButton;