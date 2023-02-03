// hooks
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAxiosPrivate } from "./useAxiosPrivate";

export const useSearch = () => {
  const [queryResult, setQueryResult] = useState("");

  const axiosPrivate = useAxiosPrivate();

  const location = useLocation();
  const query = location.pathname.split("=")[1];

  const search = async () => {
    try {
      const response = await axiosPrivate.get(`/api/users/getUsers/${query}`);
      console.log(response.data.users);
      setQueryResult(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search();
  }, []);

  return queryResult;
};
