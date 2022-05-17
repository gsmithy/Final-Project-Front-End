// import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Header from "./components/Header";
import Admin from "./screens/Admin";
import AdminPosts from "./screens/AdminPosts";
import Missing from "./screens/Missing";
import FooterPage from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
          <div className="App">
            <Header />
          </div>
        
          <Routes>
            {/* //Public Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route exact path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />

            {/* //Protected Routes */}
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminposts" element={<AdminPosts />} />

            {/* //Catch All */}
            <Route path="/*" element={<Missing />} />
          </Routes>
        <div className="mt-auto">
        <FooterPage />

        </div>
      </div>
    </Router>
  );
};

export default App;
