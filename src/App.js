import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import LogIn from "./components/LogIn";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Home path="/" />
        {/* <SignUp path="/signup" component={SignUp} /> */}
        <LogIn path="/login" component={LogIn} />
      </Router>
    </div>
  );
}

export default App;
