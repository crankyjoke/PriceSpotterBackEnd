import React, { useState } from "react";

export default function CreateAccount() {
    // Define the fields we need in state
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
    });

    const [message, setMessage] = useState("");

    // Handle input changes for all fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(""); // clear previous messages

        try {
            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // 201 Created or 200 OK, depending on your Django view
                const data = await response.json();
                setMessage(data.message || "User created successfully!");
                // Optionally, reset the form
                setFormData({
                    username: "",
                    email: "",
                    first_name: "",
                    last_name: "",
                    password: "",
                });
            } else {
                // Handle errors or validation failures
                const errorData = await response.json();
                console.error("Error creating user:", errorData);
                // If your Django view returns { "username": ["This field is required."] } etc.
                // you can display them if needed
                setMessage("Error: " + JSON.stringify(errorData));
            }
        } catch (error) {
            console.error("Network error:", error);
            setMessage("Network error occurred");
        }
    };

    return (
        <div className="create-account-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>

                {/* Username */}
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* First Name */}
                <div>
                    <label htmlFor="first_name">First Name:</label>
                    <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Create Account</button>
            </form>

            {/* Simple message display */}
            {message && <p>{message}</p>}
        </div>
    );
}
