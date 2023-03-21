import React, { useState } from "react";
import Rg from "./register.module.css";

function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Name,
        Email,
        Password,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Enter Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="Email"
            placeholder="Enter Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="Password"
            placeholder="Enter Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
}

export default Register;
