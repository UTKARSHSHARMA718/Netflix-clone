"use client"

import React, { useState } from 'react'

import AddCommentSection from '@/components/AddCommentSection/AddCommentSection';
import Comment from '@/components/Comment/Comment';
import { DUMMY_COMMENTS_DATA } from '@/constant/dummyCommentsData';

interface movieOrSeriesId {
    movieOrSeriesId: string | undefined;
}

const CommentsSection: React.FC<movieOrSeriesId> = ({ movieOrSeriesId }) => {
    const [commentsData, setCommetsData] = useState(
        DUMMY_COMMENTS_DATA?.filter((item) => item?.listingId === movieOrSeriesId)?.[0]
    );

    return (
        <div className='flex flex-col gap-4'>
            <AddCommentSection  {...{ setCommetsData }} />
            <div className='p-3 flex flex-col gap-3'>
                {commentsData?.comments?.filter(v => v)?.map((comment) => {
                    return (
                        <Comment
                            text={comment?.text}
                            replies={comment?.comments}
                            isLiked={comment?.isLiked}
                            commentId={comment?.id}
                            {...{ setCommetsData }}
                            allCommentsData={commentsData}
                            key={comment?.id}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default CommentsSection