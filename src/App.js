import React, { Component } from "react";
import { Router } from "@reach/router";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import TheFooter from "./components/TheFooter";
import DonateHome from "./components/DonateFood/Donatehome";
import ClaimHome from "./components/ClaimFood/ClaimHome";
import ThankYou from "./components/DonateFood/ThankYou";
import ClaimInfo from "./components/ClaimFood/ClaimInfo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Home path="/" />
        {/* <SignUp path="/signup" component={SignUp} /> */}
        <LogIn path="/login" component={LogIn} />
        <DonateHome path="/donate-food" />
        <ClaimHome path="/claim-food" />
        <ThankYou path="/thankyou" />
        <ClaimInfo path="claimed" />
      </Router>
      <TheFooter />
    </div>
  );
}

export default App;
