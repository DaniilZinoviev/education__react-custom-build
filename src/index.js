import React from "react";
import ReactDOM from "react-dom";

import css from "./main.scss";
import src from "./guitar.jpg";

console.log(`CSS loader returned`, css.toString());

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <img src={src} alt="Guitar" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
