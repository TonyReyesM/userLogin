//  libraries
import axios from "../../../api/axios";

//  hooks
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useGetPostComments = () => {
  const [comments, setComments] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/").slice(-1)[0];

  const getPostComments = async (id) => {
    try {
      const response = await axios.get(`/api/posts/getPostComments/${id}`);
      const postComments = response.data.comments;
      // console.log(postComments);
      setComments(postComments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostComments(id);
  }, []);

  return comments;
};
