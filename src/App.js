import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";

class App extends React.Component {
  render() {
    return (
      <div>
        <Person />
      </div>
    );
  }
}

export default App;
