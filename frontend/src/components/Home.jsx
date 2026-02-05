import React from "react";
import Hero from "../miniComponents/Hero";
import Members from "../miniComponents/Members";
import Qualities from "../miniComponents/Qualities";

const Home = () => {
  return (
    <div className="home">
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
