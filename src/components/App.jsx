import React from "react";
import Login from "./Login";

const isLoggedIn = "false";

function checkIfLoggedIn() {
  const x = isLoggedIn === "true" ? <h1>Hello</h1> : <Login />;
  return x;
}

function App() {
  return <div className="container">{checkIfLoggedIn()}</div>;
}

export default App;
