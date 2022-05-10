import React from "react";
import axios from "axios";
import { useState } from "react";

const LoginDB = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();

        if(username !== '' && password !== '') {
            const req = {
                user_name: username,
                password: password
            };

            axios.post('http://localhost:3001/users/login', req).then(result => {
                const token = result.data.jwt;
                localStorage.setItem('myJWT', token)
                console.log(result.data);
            })
        }
    }

    return (
        <div>
            <form onSubmit={signIn}>
                <h1>Sign In</h1>
                <label>Username</label>
                <input type="text" name="username" onChange={ e => setUsername(e.target.value)} />
                <label>Password</label>
                <input type="text" name="password" onChange={ e => setPassword(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default LoginDB