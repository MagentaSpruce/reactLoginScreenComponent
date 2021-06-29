# reactLoginScreenComponent
Created with React

This simple login component presents a welcome message or a login form for users. It can easily be styled and cross-utilized.

Building this React app has helped me to better learn and practice:
1) Setting up and deploying React apps
2) Components and modularity

A brief overview of the pertinent React code is given below.

Create the login form.
```React
function Login(props) {
  return (
    <form className="form">
      <Input />
      <button type="submit">Login</button>
    </form>
  );
}
```

Remove the username and password input and create another component containing them both together - together because a username input will always pair with a password input - so there is no need to split up each component further.
```React
function Input() {
  return (
    <div>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
    </div>
  );
}
```

Check to see if the user is logged in or not and render accordingly.
```React
const isLoggedIn = "false";

function checkIfLoggedIn() {
  const x = isLoggedIn === "true" ? <h1>Hello</h1> : <Login />;
  return x;
}

function App() {
  return <div className="container">{checkIfLoggedIn()}</div>;
}
```

Render.
```React
ReactDOM.render(<App />, document.getElementById("root"));
```

***End Walkthrough
