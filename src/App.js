// import logo from './logo.svg';
// import './App.css';
// import React from "react";

// import {Header} from "./src/components/Header"
// import {Home} from "./Home"
// import {List} from "./List"

// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";



// function App() {
//   return (<Router>
//       <Header/>
//   </Router>

//   );
// }

// export default App;

import React from "react";

import {Header} from "./components/Header.js"
import {Home} from "./components/Home"
import {List} from "./components/List"


import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export const App = (props) => {
  return (
    <Header/>
  
  )
};
