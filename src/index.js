import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import src from "./images/guitar.jpg";

const App = () => {
  console.log(`I'm alive!`);
  return (
    <div>
      <h1>Hello world!</h1>
      <img src={src} alt="Guitar" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
