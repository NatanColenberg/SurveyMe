import React from "react";

import Header from "./components/header/header";
import Users from "./components/users/Users";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <div id="header" className="section">
        <Header />
      </div>

      {/* Users */}
      <div id="users" className="section">
        <Users />
      </div>

      {/* Survey */}
      <div id="survey" className="section">
        Survey
      </div>

      {/* Results */}
      <div id="results" className="section">
        Results
      </div>
    </div>
  );
}

export default App;
