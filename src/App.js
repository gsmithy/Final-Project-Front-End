// import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile/Profile";
import SignUp from "./screens/SignUp";
import Header from "./components/Header";
import Admin from "./screens/Admin/Admin";
import AdminPosts from "./screens/Admin/AdminPosts";
import Missing from "./screens/Missing";
import EditPost from "./screens/Profile/UpdatePost";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImgUpload from "./screens/Profile/ImgUpload";
import { useEffect, useState } from "react";
import UpdatePost from "./screens/Admin/updatePost";
import UpdateUser from "./screens/Admin/updateUser";

const App = () => {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
        </div>
        <Routes>
          {/* //Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/updatePost/:id" element={<EditPost />} />
          <Route path="/profile/image/:id" element={<ImgUpload />} />
          <Route path="/signup" element={<SignUp />} />

          {/* //Protected Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminposts" element={<AdminPosts />} />
          <Route path="/admin/edituser/:id" element={<UpdateUser />} />
          <Route path="/admin/editpost/:id" element={<UpdatePost />} />

          {/* //Catch All */}
          <Route path="/*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
