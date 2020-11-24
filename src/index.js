import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import src from "./images/guitar.jpg";
import Logger from "./typescript/Logger.ts";

const App = () => {
  Logger.log("My message");
  return (
    <div>
      <h1>Hello world!</h1>
      <img src={src} alt="Guitar" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
