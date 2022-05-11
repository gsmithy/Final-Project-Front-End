import React from "react";
import PersonList from '../components/HomeDB'
import ApiCall from "../components/Bible";

const Home = () => {
  return (
    <div>
      <PersonList />
      <ApiCall />
    </div>
  );
};

export default Home;
