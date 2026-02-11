import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="banner">
          <h1>Our Story</h1>
          <p>
          Volunteers began with a simple idea — that collective kindness can
          create meaningful outcomes. Over time, the platform has focused on
          supporting community-driven initiatives related to education,
          healthcare awareness, and social responsibility.
        </p>
        <p>
          Transparency and accountability remain central to our approach, with
          a strong emphasis on ethical participation and responsible use of
          digital technologies.
        </p>
        </div>
        <div className="banner">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>
    </section>
  );
};

export default About;
