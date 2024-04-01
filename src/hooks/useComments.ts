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
      currentItems = [...(currentItems||[]), { ...newNode }];

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
      comments: updatedTree,
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

  const isParent = (item: any, id: string | number) => {
    return Boolean(item?.subFolder?.find((v:any) => v.id === id));
  };

  const isRoot = (item: any, id: string | number) => {
    return item?.id === id;
  };

  const deleteComment = (tree: any, requiredId: string | number) => {
    // have to reach till parent node and then we have to remove the child
    if (isRoot(tree, requiredId)) {
      return null;
    }
    if (isParent(tree, requiredId)) {
      let filteredData = tree?.comments?.filter((v:any) => v.id !== requiredId);
      return {
        ...tree,
        comments: filteredData,
      };
    }

    let updatedData = [];
    updatedData = tree?.comments?.map((v:any) => {
      return deleteComment(v, requiredId);
    });
    return {
      ...tree,
      comments: updatedData,
    };
  };

  return { addNewComment, likeOrUnlikeComment, deleteComment };
};

export default useComments;
