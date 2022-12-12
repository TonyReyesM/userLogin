import { Routes, Route } from "react-router-dom";

//  hooks
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";

//  styles
import { WebsiteStyle } from "./components/common/common.style";

//  layouts
import Main from "./components/layouts/Main";

//  components
import PersistLogin from "./components/PersistLogin/PersistLogin";

//  pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserDashboard from "./pages/UserDasboard";

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor =
      theme === "light" ? "#c7c5fc" : "#06060f";
  }, [theme]);

  return (
    <WebsiteStyle>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PersistLogin />}>
            <Route path="/user/:id" element={<UserDashboard />} />
          </Route>
        </Route>
      </Routes>
    </WebsiteStyle>
  );
}

export default App;
