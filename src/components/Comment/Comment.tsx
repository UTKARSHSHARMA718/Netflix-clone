"use client"

import React, { useState } from "react";
import useComments from "@/hooks/useComments";

interface CommentType {
    id: number,
    text: string;
    isLiked: boolean;
    comments: CommentType[],
}

interface CommentsCollection {
    listing: string;
    comments: CommentType[],
}

interface CommentsProps {
    text: string;
    replies: CommentType[];
    isLiked: boolean;
    commentId: number;
    allCommentsData: CommentsCollection;
    setCommetsData: (e: any) => void;
}

const Comment: React.FC<CommentsProps> = ({
    text,
    replies = [],
    isLiked = false,
    commentId,
    allCommentsData,
    setCommetsData,
}) => {
    const allReplies = replies?.filter(v => v);
    const [isReplySectionOpen, setIsReplySectionOpen] = useState(false);
    const [isShowAllReplies, setIsShowAllReplies] = useState(false);
    const [replyText, setReplyText] = useState("");
    const toggleReply = () => {
        if (isReplySectionOpen) {
            setReplyText('');
        }
        setIsReplySectionOpen((prev) => !prev)
    };
    const toggleShowReply = () => setIsShowAllReplies((prev) => !prev);

    const { addNewComment, likeOrUnlikeComment, deleteComment } = useComments();

    const addReplyHanlder = () => {
        const updatedValue = allCommentsData?.comments?.map((item: any) => {
            return addNewComment(item, commentId, replyText);
        });
        setCommetsData(updatedValue)
        setReplyText("");
        setIsShowAllReplies(true)
    };

    const toggleLike = () => {
        const updatedValue = allCommentsData?.comments?.map((item: any) => {
            return likeOrUnlikeComment(item, commentId);
        });
        setCommetsData(updatedValue)
    }

    const deleteCommentOrReply = () => {
        let updatedValue = allCommentsData?.comments?.map((item: any) => {
            return deleteComment(item, commentId);
        });
        updatedValue = updatedValue?.filter(v=>v)
        setCommetsData(updatedValue)
    }

    return (
        <div className="p-2 flex flex-col gap-2 border-[1px] border-red-400 rounded-xl w-full bg-slate-800">
            <div className="flex flex-col gap-3 w-full">
                <div>
                    <p className="text-white font-medium text-sm">{text}</p>
                </div>
                <div className="flex gap-3">
                    <p className="cursor-pointer" onClick={toggleLike}>{isLiked ? <>❤️</> : <>🤍</>}</p>
                    {!isReplySectionOpen && <button className="text-xs text-slate-300 font-medium" onClick={toggleReply}>Reply</button>}
                    {!isReplySectionOpen && <button className="text-xs text-slate-300 font-medium" onClick={deleteCommentOrReply}>Delete</button>}
                    {isReplySectionOpen && (
                        <div className="w-full flex flex-col gap-3 items-start">
                            <textarea
                                className="w-3/4 outline-none rounded-md p-1 text-sm"
                                value={replyText}
                                onChange={(e) => setReplyText(e?.target?.value)}
                            ></textarea>
                            <div className="flex gap-2">
                                <button className="text-xs font-bold text-red-600 disabled:text-red-100 disabled:cursor-not-allowed" disabled={!replyText} onClick={addReplyHanlder}>Add reply</button>
                                <button className="text-xs text-slate-300 font-medium" onClick={toggleReply}>Cancel</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {!!allReplies?.length && (
                <div className="p-1 flex flex-col items-start">
                    <button className="text-xs text-slate-300 font-medium" onClick={toggleShowReply}>{isShowAllReplies ? "Hide" : "Show"} replies</button>
                    {isShowAllReplies && (
                        <div className="flex flex-col gap-4 pl-[12px] w-full pt-4">
                            {allReplies?.map((reply) => {
                                return (
                                    <Comment
                                        key={reply?.id}
                                        text={reply?.text}
                                        replies={reply?.comments}
                                        isLiked={reply?.isLiked}
                                        commentId={reply?.id}
                                        {...{ setCommetsData, allCommentsData }}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Comment;
