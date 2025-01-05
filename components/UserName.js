import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
// import "./UserName.css"

export default function UserName() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError("Both fields are required.");
            return;
        }
        else{

        }
        setError("");

        console.log("Username:", username);
        console.log("Password:", password);




        navigate("/");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    User Name:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Sign in</button>
            </form>
        </div>
    );
}
