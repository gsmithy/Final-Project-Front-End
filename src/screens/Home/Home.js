import React from "react";
import ApiCall from "./Bible";
import PersonList from "./HomeDB";


const Home = () => {
  return (
    <div>
        <PersonList />
        <ApiCall />
    </div>
  );
};

export default Home;
