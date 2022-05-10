// import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import NewPost from "./screens/NewPost";
import Profile from "./screens/Profile";
import SignUp from "./screens/SignUp";
import Header from "./components/Header";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
<<<<<<< HEAD
          <Route path='/profile/:username' element={<Profile />} />
          <Route path="/Sign%20Up" element={<SignUp />} />
          <Route exact path="/" element={<Home />} />
=======
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign%20up" element={<SignUp />} />
>>>>>>> dev
        </Routes>
      </div>
    </Router>
  );
}

export default App;
