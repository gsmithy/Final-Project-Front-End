import React from "react";
import ApiCall from "./Bible";
import PersonList from "./HomeDB";
import TenPosts from "./TenPosts";


const Home = () => {
  return (
    <div>
        <PersonList />
        <ApiCall />
        <TenPosts />
    </div>
  );
};

export default Home;
