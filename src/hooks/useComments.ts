import { getRandomId } from "@/libs/utils/utils";

const useComments = () => {
  const addNewComment = (
    tree: any,
    requiredId: string | number,
    commentText: string
  ) => {
    if (tree?.id === requiredId) {
      const newNode = {
        id: getRandomId(),
        isLiked: false,
        text: commentText,
        comments: [],
      };

      let currentItems = tree?.comments;
      currentItems = [...(currentItems || []), { ...newNode }];

      return {
        ...tree,
        comments: currentItems,
      };
    }

    let updatedTree = [];
    updatedTree = tree?.comments?.map((item: any) => {
      return addNewComment(item, requiredId, commentText);
    });

    return {
      ...tree,
      comments: updatedTree||[],
    };
  };

  const likeOrUnlikeComment = (tree: any, requiredId: string | number) => {
    if (tree?.id === requiredId) {
      return {
        ...tree,
        isLiked: !tree?.isLiked,
      };
    }

    let updatedTree = [];
    updatedTree = tree?.comments?.map((item: any) => {
      return likeOrUnlikeComment(item, requiredId);
    });

    return {
      ...tree,
      comments: updatedTree,
    };
  };
  
  const deleteComment = (tree: any, requiredId: string | number) => {
    if(tree?.id === requiredId) {
      return null;
    }

    let updatedData = [];
    updatedData = tree?.comments?.map((v: any) => {
      return deleteComment(v, requiredId);
    });

    return {
      ...tree,
      comments:  updatedData||[],
    };
  };

  return { addNewComment, likeOrUnlikeComment, deleteComment };
};

export default useComments;
