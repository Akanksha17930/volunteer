import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <span className="badge">Trusted Donation Platform</span>
        <h1>
          Make Real Impact <br />
          <span>Through Kindness</span>
        </h1>
        <p>
          Support verified causes, empower communities, and track the impact of
          every contribution you make.
        </p>

        <div className="actions">
          <Link to="/donate" className="primary">
            Start Donating
          </Link>
          <Link to="/about" className="secondary">
            Learn More
          </Link>
        </div>
      </div>

      <div className="visual">
        <img src="/hero.png" alt="impact" />
      </div>

      <style>{`
        .hero {
          min-height: 95vh;
          padding: 90px 8%;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
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

        .hero h1 {
          font-size: 56px;
          font-weight: 800;
          line-height: 1.15;
          color: #0f172a;
          margin-bottom: 24px;
        }

        .hero h1 span {
          background: linear-gradient(90deg, #6366f1, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          font-size: 18px;
          color: #475569;
          line-height: 1.7;
          max-width: 560px;
          margin-bottom: 40px;
        }

        .actions {
          display: flex;
          gap: 18px;
        }

        .primary {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          color: #fff;
          padding: 16px 34px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 600;
          box-shadow: 0 25px 60px rgba(99,102,241,0.45);
        }

        .secondary {
          border: 1px solid #c7d2fe;
          color: #4338ca;
          padding: 16px 32px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 600;
        }

        .visual img {
          width: 100%;
          max-width: 520px;
          filter: drop-shadow(0 40px 80px rgba(0,0,0,0.2));
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .actions {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
