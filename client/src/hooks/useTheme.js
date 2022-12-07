import { useContext } from "react";
import ThemeContext from "../contexts/ThemeProvider";

const useTheme = () => {
  const { theme } = useContext(ThemeContext);
  return useContext(ThemeContext);
};

export default useTheme;
