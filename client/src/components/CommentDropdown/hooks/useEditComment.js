//  hooks
import { axiosPrivate } from "../../../api/axios";

export const useEditComment = () => {
  const editComment = async () => {
    try {
      const response = await axiosPrivate.put("");
      const editedComment = response.data.comment;
      return editedComment;
    } catch (error) {
      console.log(error);
    }
  };

  return editComment;
};
