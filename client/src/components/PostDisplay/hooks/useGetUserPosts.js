//  hooks
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";

export const useGetUserPosts = () => {
  const { auth } = useAuth();
  const [posts, setPosts] = useState(null);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const getUserPosts = async () => {
      try {
        const response = await axiosPrivate.get(
          `/api/posts/get/${auth.user._id}`
        );
        const posts = response.data.posts;
        setPosts(posts);
      } catch (error) {
        console.log(error);
      }
    };

    getUserPosts();
  }, []);

  return { posts, setPosts };
};
