import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

// 1. we write JSX not HTML
// 2. we write components
// 3. we use props (and state)

ReactDOM.render(
  <React.StrictMode>
    <Button color="red">red</Button>
    <Button color="green">green</Button>
    <Button color="pink">pink</Button>
  </React.StrictMode>,
  document.getElementById("root")
);
