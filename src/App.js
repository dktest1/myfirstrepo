import React from "react";
import "./App.css";
import Person from "./components/Person";

class App extends React.Component {
  render() {
    return (
      <div>
        <Person name="Dan" />
        <p>Hello from the feature9!</p>
      </div>
    );
  }
}

export default App;
