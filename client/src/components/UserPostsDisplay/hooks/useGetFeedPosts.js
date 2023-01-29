//  hooks
import { useState, useEffect } from "react";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";
import { useAuth } from "../../../hooks/useAuth";

export const useGetFeedPosts = () => {
  const [feedPosts, setFeedPosts] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const getFeedPosts = async () => {
    try {
      const response = await axiosPrivate.get(
        `/api/posts/getFeedPosts/${auth.user._id}`
      );
      console.log(response);
      setFeedPosts(response.data.posts);
    } catch (error) {
      console.log();
    }
  };

  useEffect(() => {
    getFeedPosts();
  }, []);

  useEffect(() => {
    console.log(feedPosts);
  }, [feedPosts]);

  return { feedPosts, setFeedPosts };
};
