import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if userName or Password exist => chatengine -> gives message

    const authObject = {
      "Project-ID": "8d977bd6-1509-43c9-ac23-31e35e5235d2",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      // store the username and password into local storage to stay logged in.
      // works out -> logged in
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      // reload the page
      window.location.reload();
    } catch (error) {
      // doesnt work out => give error with a message
      setError('Oops! You entered the incorrect credentials.')
    }


  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
