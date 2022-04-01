import React, { useState } from "react";

function Login() {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleUserNameInputChange = (event) => {
    // console.log("writing");
    setValues({ ...values, username: event.target.value });
  };

  const handlePasswordInputChange = (event) => {
    // console.log("pass");
    setValues({ ...values, password: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      user_name: values.username,
      password: values.password,
    };
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((jsonData) => console.log("data", jsonData));
    console.log("i submit ");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>User Name:</label>
        <input
          onChange={handleUserNameInputChange}
          value={values.username}
          type="text"
          placeholder="username"
        ></input>
        <br />
        <label>Password:</label>
        <input
          onChange={handlePasswordInputChange}
          value={values.password}
          type="password"
          placeholder="password"
        ></input>
        <br />
        <button onClick={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}
export default Login;

// // create new user
// fetch('http://localhost:9292/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
// 	user_name: "test",
// 	password: "test"
// }),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
