import { Routes, Route } from "react-router-dom";

//  styles
import { WebsiteStyle } from "./components/common/common.style";

//  layouts
import UserLoginLayout from "./layouts/loginLayout";

//  components
import PersistLogin from "./components/persistLogin";

//  pages
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import UserPage from "./pages/userPage";

function App() {
  return (
    <WebsiteStyle>
      <Routes>
        <Route path="/" element={<UserLoginLayout />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PersistLogin />}>
            <Route path="/user/:id" element={<UserPage />} />
          </Route>
        </Route>
      </Routes>
    </WebsiteStyle>
  );
}

export default App;
