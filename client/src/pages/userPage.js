import { useEffect } from "react";

//  components
import UpdateUserForm from "../components/updateUserForm";

//  styles
import { Button } from "../components/common/common.style";

//  hooks
import useLogout from "../hooks/useLogout";

const UserPage = () => {
  const logout = useLogout();

  return (
    <>
      <Button onClick={logout}>Log out</Button>
      <UpdateUserForm />
    </>
  );
};

export default UserPage;
