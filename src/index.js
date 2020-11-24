import React from "react";
import ReactDOM from "react-dom";

import "./styles/main.scss";
import src from "./images/guitar.jpg";

const App = () => {
          var a = 123;
  console.log('a', a)
  return (
    <div>
      <h1>Hello world!</h1>
      <img src={src} alt="Guitar" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
