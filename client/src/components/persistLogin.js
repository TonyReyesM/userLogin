//  components
import { Outlet } from "react-router-dom";

//  hooks
import { useState, useEffect } from "react";
import useRefreshToken from "../hooks/useRefreshToken";
import useAuth from "../hooks/useAuth";

//  assets
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

//  styles
import { LoadingSign } from "./common/common.style";

const iconStyle = {
  height: "8rem",
  width: "8rem",
};

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

  return (
    <>
      {isLoading ? (
        <LoadingSign>
          <HourglassEmptyIcon style={iconStyle} />
        </LoadingSign>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
