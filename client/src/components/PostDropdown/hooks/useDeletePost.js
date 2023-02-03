//  hooks
// import { useAuth } from "../../../hooks/useAuth";
import { useAxiosPrivate } from "../../../hooks/useAxiosPrivate";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

export const useDeletePost = () => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split("/").slice(-1)[0];

  const deletePost = async () => {
    try {
      await axiosPrivate.delete(`/api/posts/delete/${id}`);
      navigate(`/dashboard/${auth.user._id}/my-posts`);
    } catch (error) {
      console.log(error);
    }
  };
  return deletePost;
};
