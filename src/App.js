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
import UpdatePost from "./screens/Admin/updatePost";
import UpdateUser from "./screens/Admin/updateUser";
import RequireAuth from "./components/RequireAuth";
import RequireAdmin from "./components/RequireAdmin";

const App = () => {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
        </div>
        <Routes>

          {/* //Public Routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />


          {/* Authenticated routes*/}
          {/* <Route  element={ <RequireAuth/> } > */}
          <Route path="/newpost" element={ <RequireAuth> <NewPost /> </RequireAuth> } />
          <Route path="/profile" element={ <RequireAuth> <Profile /> </RequireAuth> } />
          <Route path="/profile/updatePost/:id" element={ <RequireAuth> <EditPost /> </RequireAuth> } />
          <Route path="/profile/image/:id" element={ <RequireAuth> <ImgUpload /> </RequireAuth> } />
        {/* </Route> */}

          {/* //Authorized Routes */}
          <Route path="/admin" element={ <RequireAdmin> <Admin /> </RequireAdmin> } />
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
