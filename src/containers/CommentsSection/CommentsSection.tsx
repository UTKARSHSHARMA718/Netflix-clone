"use client"

import React, { useContext } from 'react'

import AddCommentSection from '@/components/AddCommentSection/AddCommentSection';
import Comment from '@/components/Comment/Comment';

import { GlobalContext } from '@/context/GlobalContext';

interface movieOrSeriesId {
    movieOrSeriesId: string | undefined;
}

const CommentsSection: React.FC<movieOrSeriesId> = ({ movieOrSeriesId }) => {
    // @ts-ignore
    const { globalState, setGlobalState } = useContext(GlobalContext);
    const commentsData = globalState?.commentsData?.filter((item: any) => item?.listingId === movieOrSeriesId)?.[0] || { listingId: movieOrSeriesId, comments: [] };

    const setCommetsData = (updatedCommentsData: any) => {
        const comments = globalState?.commentsData?.filter((item: any) => item?.listingId !== movieOrSeriesId)
        setGlobalState((prev: any) => {
            return {
                ...prev,
                commentsData: [...(comments || []), { listingId: commentsData?.listingId, comments: updatedCommentsData }],
            }
        })
    }

    return (
        <div className='flex flex-col gap-4'>
            <AddCommentSection {...{ setCommetsData, commentsData }} />
            <div className='py-3 flex flex-col gap-3'>
                {commentsData?.comments?.filter((v:any) => v)?.map((comment:any) => {
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