import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Cta1 from "../components/Cta1";
import AboutUs from "../components/Aboutus";
import Proposal from "../components/Proposal";
import Cta2 from "../components/Cta2";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Benefits />
        <Cta1 />
        <AboutUs /> 
        <Proposal /> 
        <Cta2 />
      </div>
    );
  }
}

export default Home;
