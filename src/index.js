import React from "react";
import ReactDOM from 'react-dom'

import src from "./guitar.jpg";

const App = () => {
  return (<div>
    <h1>Hello world!</h1>
    <img src={src} alt="Guitar"/>
  </div>)
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)