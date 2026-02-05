import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "Community Driven",
      description:
        "We work closely with communities to create sustainable and meaningful impact.",
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "Transparency",
      description:
        "Every donation is traceable and results are openly shared with supporters.",
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "Proven Impact",
      description:
        "We focus on measurable outcomes, ensuring our work creates real change.",
    },
  ];

  return (
    <section className="qualities">
      <div className="qualities-header">
        <h2>Our Core Values</h2>
        <p>Principles that guide our actions and ensure meaningful impact.</p>
      </div>

      <div className="qualities-row">
        {qualities.map((q) => (
          <div className="quality-card" key={q.id}>
            <div className="quality-img">
              <img src={q.image} alt={q.title} />
            </div>
            <div className="quality-text">
              <h3>{q.title}</h3>
              <p>{q.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .qualities {
          padding: 100px 8%;
          background: #f8fafc;
          text-align: center;
        }

        .qualities-header {
          max-width: 650px;
          margin: 0 auto 60px auto;
        }

        .qualities-header h2 {
          font-size: 42px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .qualities-header p {
          font-size: 16px;
          color: #475569;
        }

        .qualities-row {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: nowrap;
          overflow-x: auto;
          padding-bottom: 10px;
        }

        .qualities-row::-webkit-scrollbar {
          height: 6px;
        }
        .qualities-row::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 10px;
        }

        .quality-card {
          background: linear-gradient(135deg, #ffffff, #eef2ff);
          border-radius: 24px;
          width: 360px;
          padding: 24px;
          text-align: center;
          box-shadow: 0 30px 70px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          flex-shrink: 0;
        }

        .quality-card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 50px 120px rgba(0,0,0,0.18);
        }

        .quality-img img {
          width: 140px;
          height: 140px;
          object-fit: cover;
          border-radius: 50%;
          margin-bottom: 20px;
          border: 4px solid #6366f1;
        }

        .quality-text h3 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #0f172a;
        }

        .quality-text p {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
        }

        @media (max-width: 1100px) {
          .qualities-row {
            flex-wrap: wrap;
            justify-content: center;
          }
          .quality-card {
            width: 90%;
            margin-bottom: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Qualities;
