import React from 'react'
import Image from 'next/image';

import HollowStar from "@/../public/images/star/hollow star.png"
import Star from "@/../public/images/star/golden star.png"
import styles from "./StarRating.module.css"

interface StarRatingProps {
    rating: number;
    isLabelRequired?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, isLabelRequired=true }) => {
    const lowerBound = Math.floor(rating);
    const isHalfStar = lowerBound < rating;
    const hollowStars = 5 - Math.ceil(rating);

    return (
        <div className='flex gap-3 rounded-lg items-center'>
            {isLabelRequired && <p className='text-red-500 font-semibold capitalize'>Rating :</p>}
            <div className='flex gap-3 items-center'>

                {
                    new Array(lowerBound)?.fill(1)?.map(star => {
                        return <Image src={Star.src} width={20} height={20} alt="golden star" />
                    })
                }
                {
                    isHalfStar && <Image src={Star?.src} width={20} height={20} alt="Half star" className={styles.halfStar} />
                }
                {
                    new Array(hollowStars)?.fill(1)?.map(star => {
                        return <Image src={HollowStar?.src} width={24} height={24} alt="Half star" />
                    })
                }
            </div>
        </div>
    )
}

export default StarRating