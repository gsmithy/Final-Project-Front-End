import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";


//Component is not rendering to page. "Undefined" error.
const Admin = () => {
    const { setAuth } =useAuth();

    const [user, setUser] = useState();

    useEffect(() => {
        let token = localStorage.getItem("myJWT");
        console.log(token);
        const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }

        axios.get('/http://localhost:3001/admin', { jwt: token }, options)
        .then(user => {
          
            setUser(user.data);
            console.log(user);
        })
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            <ul>
              {user.map(user => <li> {user.user_name} </li>)}
            </ul>   
        </div>
    );
};

export default Admin;