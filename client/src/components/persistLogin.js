//  components
import { Outlet } from "react-router-dom";

//  hooks
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

//  styles
import { LoadingSign } from "./common/common.style";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   console.log(`isLoading: ${isLoading}`);
  //   console.log(`accessToken: ${JSON.stringify(auth?.accessToken)}`);
  // });

  return <>{isLoading ? <LoadingSign>Loading</LoadingSign> : <Outlet />}</>;
};

export default PersistLogin;