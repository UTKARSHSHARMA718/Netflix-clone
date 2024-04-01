import React, { useState } from "react";

import Button from "../Button/Button";
import { getRandomId } from "@/libs/utils/utils";

interface AddCommentSectionProps {
  setCommetsData: (v:any) => void;
}

const AddCommentSection: React.FC<AddCommentSectionProps> = ({ setCommetsData,commentsData }) => {
  const [textData, setTextData] = useState("");

  const addCommentHandler = () => {
    const newComment = {
      id: getRandomId(),
      isLiked: false,
      text: textData,
      replies: [],
    };
    // setCommetsData((prev:any) => {
    //   return {
    //     ...prev,
    //     comments: [...prev?.comments, newComment],
    //   };
    // });
    setCommetsData([...commentsData?.comments, newComment])
  };

  return (
    <div className="p-4 border-[1px] border-white rounded-xl flex flex-col gap-3 items-start">
      <p className="text-lg text-slate-300 font-medium">Add new Comment</p>
      <textarea
        value={textData}
        name="comment"
        cols={30}
        rows={2}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTextData(e?.target?.value)}
        className="w-full outline-none rounded-md p-1 min-h-[120px]"
      ></textarea>
      <Button label="Add comment" isMarginTopRequired={false} onClick={addCommentHandler} disabled={!textData} customStyles="max-w-[180px] text-sm p-0"/>
    </div>
  );
};

export default AddCommentSection;
