//  hooks
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//  sections
import LoginForm from "../components/LoginForm/LoginForm";

const Login = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.accessToken) navigate(`/dashboard/${auth.user._id}`);
  }, [auth]);

  return <LoginForm />;
};

export default Login;
