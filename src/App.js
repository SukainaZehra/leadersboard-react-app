import React, { Component } from "react";
import "./App.css";
import Student from "./components/Student";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="leadersboardHeading">Leadersboard</h1>
        <Student name="Sukaina Zehra" university="NED University" score={348} />
        <Student
          name="Wajeeha Kazmi"
          university="Karachi University"
          score={345}
        />
        <Student
          name="Syeda Aqeela"
          university="Jinnah Sindh Universiy"
          score={290}
        />
      </div>
    );
  }
}

export default App;
