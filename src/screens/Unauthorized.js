import React from "react";
import { Alert } from "react-bootstrap";

const Unauthorized = () => {


    return (
      <div>      
        {['danger'].map((danger) => (
            <Alert key={danger} variant={danger}>
            Access Denied! You do not have permission to access this page! Please log in as an administrator 
            <Alert.Link href="/login"> Here </Alert.Link> 
            </Alert>
        ))}
      </div>
    );
};

export default Unauthorized;