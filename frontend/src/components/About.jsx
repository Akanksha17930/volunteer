import React from "react";

const About = () => {
  return (
    <section className="about">
      {/* HERO SECTION */}
      <div className="about-hero">
        <div className="about-content">
          <span className="badge">Who We Are</span>
          <h1>
            Driven by Compassion, <br />
            <span>Powered by People</span>
          </h1>
          <p>
            Volunteers is a trusted donation and community platform focused on
            creating real, measurable impact. We connect compassionate people
            with causes, ensuring transparency, accountability, and meaningful
            engagement.
          </p>
        </div>

        <div className="about-image">
          <img src="/about.png" alt="aboutImg" />
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="about-story">
        <h2>Our Story</h2>
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

        {/* ✅ REQUIRED CLARIFICATION (CRYPTOMUS SAFE) */}
        <p>
          Volunteers operates as an independent digital platform designed to
          facilitate community support initiatives. The platform does not
          represent a registered charitable organization, financial institution,
          or non-profit entity, and all content is provided for informational
          and demonstration purposes.
        </p>
      </div>

      {/* VALUES SECTION */}
      <div className="about-values">
        <div className="value-card">
          <h3>🌍 Our Mission</h3>
          <p>
            To encourage ethical participation and responsible contributions
            through transparent digital platforms.
          </p>
        </div>

        <div className="value-card">
          <h3>🤝 Our Vision</h3>
          <p>
            A world where technology enables trust, awareness, and positive
            social engagement.
          </p>
        </div>

        <div className="value-card">
          <h3>📈 Our Focus</h3>
          <p>
            Promoting transparency, education, and responsible innovation in
            community-driven initiatives.
          </p>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .about {
          background: radial-gradient(circle at top, #eef2ff 0%, #ffffff 40%, #f8fafc 100%);
          padding-bottom: 100px;
        }

        .about-hero {
          padding: 100px 8%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 80px;
        }

        .badge {
          display: inline-block;
          background: rgba(99,102,241,0.12);
          color: #4f46e5;
          padding: 8px 18px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 22px;
        }

        .about-content h1 {
          font-size: 52px;
          font-weight: 800;
          line-height: 1.15;
          color: #0f172a;
          margin-bottom: 22px;
        }

        .about-content h1 span {
          background: linear-gradient(90deg, #6366f1, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-content p {
          font-size: 18px;
          color: #475569;
          line-height: 1.8;
          max-width: 580px;
        }

        .about-image img {
          width: 100%;
          max-width: 520px;
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.2));
        }

        .about-story {
          padding: 80px 8% 40px;
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .about-story h2 {
          font-size: 40px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .about-story p {
          font-size: 17px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 18px;
        }

        .about-values {
          padding: 60px 8%;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
        }

        .value-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 36px 28px;
          box-shadow: 0 30px 70px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          text-align: center;
        }

        .value-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 45px 100px rgba(0,0,0,0.15);
        }

        .value-card h3 {
          font-size: 22px;
          margin-bottom: 14px;
          color: #1e293b;
        }

        .value-card p {
          font-size: 15px;
          color: #475569;
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .about-hero {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .about-content p {
            margin: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default About;