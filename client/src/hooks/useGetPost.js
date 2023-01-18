//  axios
import axios from "../api/axios";

//  hooks
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useGetPost = () => {
  const [post, setPost] = useState(null);
  const [postUser, setPostUser] = useState(null);
  const location = useLocation();
  const id = location.pathname.split("/").slice(-1)[0];

  const getPost = async (id) => {
    try {
      const response = await axios.get(`/api/posts/getPost/${id}`);
      const currentPost = response.data.post;
      const currentPostUser = response.data.user;
      setPost(currentPost);
      setPostUser(currentPostUser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost(id);
  }, []);

  return { post, postUser };
};
