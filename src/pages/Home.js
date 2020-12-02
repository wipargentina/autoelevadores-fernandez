import React, { Component } from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Cta1 from "../components/Cta1";
import AboutUs from "../components/Aboutus";
import Proposition2 from "../components/Proposition2";
// import Proposition from "../components/Proposition";
import Cta2 from "../components/Cta2";
import Trademarks from "../components/Trademarks";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Benefits />
        <Cta1 />
        <AboutUs /> 
        <Proposition2 /> 
        {/* <Proposition />  */}
        <Cta2 />
        <Trademarks />
      </div>
    );
  }
}

export default Home;
