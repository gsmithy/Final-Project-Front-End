import React from "react";
import { Alert } from "react-bootstrap";

const Missing = () => {


    return (
        <div>
       <>
  {[
   
    'secondary',
  ].map((secondary) => (
    <Alert key={secondary} variant={secondary}>
      Error! This page can not be found. Please return to the 
      <Alert.Link href="/"> Home </Alert.Link>  page.
    </Alert>
  ))}
</>
        </div>
    );
};

export default Missing;