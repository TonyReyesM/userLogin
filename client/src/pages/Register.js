//  hooks
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

//  components
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Register = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.accessToken) navigate(`/dashboard/${auth.user._id}`);
  }, [auth]);

  return <RegisterForm />;
};

export default Register;
