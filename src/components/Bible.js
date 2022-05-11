import React, { useState } from "react";
import axios from "axios";

const ApiCall = () => {
  const [verse, setVerse] = useState("");

  axios
    .get("https://bible-api.com/john 3:16")
    //console.log(response)
    .then((res) => {
      setVerse(res.data);
    })
    .catch((err) => {
      console.log(err);

      // console.log(verses);
    });

  return (<div>{`"${verse.text}"`}</div>);
};

export default ApiCall;
