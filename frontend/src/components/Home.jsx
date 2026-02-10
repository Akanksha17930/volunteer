import React from "react";
import Hero from "../miniComponents/Hero";
import Members from "../miniComponents/Members";
import Qualities from "../miniComponents/Qualities";

const Home = () => {
  return (
    <div className="home">

      {/*
        CRYPTOMUS / COLLEGE PROJECT DISCLAIMER (FOR CODE REFERENCE ONLY)

        This website is a college project created for educational purposes only.
        All crypto payments are for testing/demo use and not real donations.
      */}

      <Hero />
      <Members />
      <Qualities />

      <style>{`
        .home {
          background: radial-gradient(
            circle at top,
            #eef2ff 0%,
            #ffffff 35%,
            #f8fafc 100%
          );
        }
      `}</style>
    </div>
  );
};

export default Home;