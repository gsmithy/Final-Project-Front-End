// import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile/Profile";
import SignUp from "./screens/SignUp";
import Header from "./components/Header";
import EditPost from "./screens/Profile/UpdatePost";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ImgUpload from "./screens/Profile/ImgUpload";


const App = () => {
  return (
    <Router>
      <div>
        <div className="App">
          <Header />
        </div>
        <Routes>
          
          <Route path="/login" element={<Login />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/updatePost/:id" element={<EditPost />} />
          <Route path="/profile/image/:id" element={<ImgUpload />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
