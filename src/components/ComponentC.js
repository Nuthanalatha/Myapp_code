import React, { useState } from "react";

function ComponentC() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const updateUserName = (event) => {
    console.log(event.target.value);

    setUser({
      ...user,
      userName: event.target.value,
    });
  };

  const updatePassword = (event) => {
    setUser({
      ...user,
      password: event.target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
  };
  return (
    <form>
      UserName:
      <input type="text" value={user.userName} onChange={updateUserName} />
      <br />
      <br />
      Password:
      <input type="text" value={user.password} onChange={updatePassword} />
      <br></br>
      <button onClick={login}>Login</button>
      <p>{user.userName}</p>
      <p>{user.password}</p>
    </form>
  );
}

export default ComponentC;
