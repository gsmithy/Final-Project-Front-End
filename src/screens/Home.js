import React from "react";
import ApiCall from "../components/Bible";
import PersonList from "../components/HomeDB";


const Home = () => {
  return (
    <div>
        <PersonList />
        <ApiCall />
    </div>
  );
};

export default Home;
