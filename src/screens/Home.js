import React from "react";
import PersonList from "../components/HomeDB";

const Home = () => {
  return (
    <div> 
      <h1 className="p-4 d-flex justify-content-center">Home</h1>
      <PersonList>
      </PersonList>
    </div>
  );
};

export default Home;
