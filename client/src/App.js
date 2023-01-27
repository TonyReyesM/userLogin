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
import Projects from "./pages/dashboard/Projects/Projects";
import CreatePost from "./pages/dashboard/Projects/CreatePost";
import MyPosts from "./pages/dashboard/Projects/MyPosts";
import Post from "./pages/Post";
import Account from "./pages/dashboard/Account";
import Settings from "./pages/dashboard/Settings";

function App() {
  const { theme } = useTheme();
  const { auth, setAuth } = useAuth();

  useEffect(() => {
    if (!auth.user && localStorage.getItem("accessToken")) {
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
          <Route path="/post/:id" element={<Post />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route element={<PersistLogin />}>
            <Route path="/dashboard/:id" element={<Home />} />
            <Route path="/dashboard/:id/projects" element={<Projects />} />
            <Route path="/dashboard/:id/my-posts" element={<MyPosts />} />
            <Route path="/dashboard/:id/create-post" element={<CreatePost />} />
            <Route path="/dashboard/:id/account" element={<Account />} />
            <Route path="/dashboard/:id/settings" element={<Settings />} />
          </Route>
        </Route>
      </Routes>
    </WebsiteStyle>
  );
}

export default App;
