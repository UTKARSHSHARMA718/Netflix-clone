'use client'

import React from 'react'
import Image from 'next/image';

import HollowStar from "@/../public/images/star/hollow star.png"
import Star from "@/../public/images/star/golden star.png"
import styles from "./StarRating.module.css"

interface StarRatingProps {
    rating: number;
    isLabelRequired?: boolean;
    onClick?: (v: number) => void;
    numberOfStars?: number;
    isAlignVerticleForSmallScreens?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, isLabelRequired = true, onClick, numberOfStars = 5, isAlignVerticleForSmallScreens=true }) => {
    const lowerBound = Math.floor(rating);
    const isHalfStar = lowerBound < rating;
    const hollowStars = numberOfStars - Math.ceil(rating);

    return (
        <div className={`flex gap-3 rounded-lg items-center md:flex-row ${isAlignVerticleForSmallScreens ? "flex-col" : ""}`}>
            {isLabelRequired && <p className='text-red-500 font-semibold capitalize'>Rating :</p>}
            <div className='flex gap-3 items-center'>
                {
                    new Array(lowerBound)?.fill(1)?.map((star, index) => {
                        return <Image src={Star.src} width={20} height={20} alt="golden star" onClick={() => onClick?.(index + 1)} />
                    })
                }
                {
                    isHalfStar && <Image src={Star?.src} width={20} height={20} alt="Half star" className={styles.halfStar} />
                }
                {
                    new Array(hollowStars)?.fill(1)?.map((star, index) => {
                        return <Image src={HollowStar?.src} width={24} height={24} alt="Half star" onClick={() => onClick?.(lowerBound + index + 1)} />
                    })
                }
            </div>
        </div>
    )
}

export default StarRating