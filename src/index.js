import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import SayHello from "./SayHello";

ReactDOM.render(
  <React.StrictMode>
    <SayHello />
    <Button color="red">red</Button>
    <Button color="green">green</Button>
    <Button color="pink">pink</Button>
  </React.StrictMode>,
  document.getElementById("root")
);
