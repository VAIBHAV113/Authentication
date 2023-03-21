import React, { useState } from "react";
import Lg from "./login.module.css";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Email,
        Password,
      }),
    });
    const data = await response.json();
    if (data.user) {
      alert("Login Successfull");
      window.location.href="/dashboard"
    } else {
      alert("Please Check your Usernae and Password");
    }
    console.log(data);
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
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
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
