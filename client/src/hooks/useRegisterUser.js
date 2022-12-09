// api
import axios from "../api/axios";

//  hooks
import { useNavigate } from "react-router-dom";

export const useRegisterUser = () => {
  const navigate = useNavigate();

  const registerUser = async (userData) => {
    try {
      await axios.post("/api/users/register", userData);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return registerUser;
};
