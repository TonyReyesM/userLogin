import { Routes, Route } from "react-router-dom";

//  hooks
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import { useAuth } from "./hooks/useAuth";

//  styles
import { WebsiteStyle } from "./components/common/common.style";

//  layouts
import Main from "./components/layouts/Main";
import Dashboard from "./components/layouts/Dashboard";

//  components
import PersistLogin from "./components/PersistLogin/PersistLogin";

//  pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/dashboard/Home";
import Account from "./pages/dashboard/Account";
import Settings from "./pages/dashboard/Settings";

function App() {
  const { theme } = useTheme();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    console.log("Running local storage auth effect in app");
    if (!auth.user && localStorage.getItem("accessToken")) {
      console.log("Restoring auth state in app");
      const user = JSON.parse(localStorage.getItem("user"));
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      setAuth({ user, accessToken, refreshToken });
    }
  }, []);

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
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route element={<PersistLogin />}>
            <Route path="/dashboard/:id" element={<Home />} />
            <Route path="/dashboard/:id/account" element={<Account />} />
            <Route path="/dashboard/:id/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </WebsiteStyle>
  );
}

export default App;
