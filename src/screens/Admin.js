import React, { useEffect, useState } from "react";
import axios from "axios";



//Component is not rendering to page. "Undefined" error.
const Admin = () => {
   

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let token = localStorage.getItem("myJWT");
        console.log(token);
        const options = {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }

        axios.get('http://localhost:3001/admin', options)
        .then(users => {
            setUsers(users.data);
            console.log(users);
        })
    }, []);

    return (
        <div>
            <h1>All Users</h1>
            <ul>
              {users.map(user => <li> {user.user_name} </li>)}
              {/* { console.log(users) } */}
            </ul>   
        </div>
    );
};

export default Admin;