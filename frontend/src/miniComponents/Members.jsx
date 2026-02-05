import React from "react";

const Members = () => {
  const members = [
    { id: 1, image: "/m1.jpg", name: "Alexa", role: "Program Director" },
    { id: 2, image: "/m2.jpg", name: "John", role: "Community Manager" },
    { id: 3, image: "/m3.jpg", name: "Michael", role: "Impact Analyst" },
    { id: 4, image: "/m4.jpg", name: "Robert", role: "Field Coordinator" },
    { id: 5, image: "/m5.jpg", name: "Siri", role: "Volunteer Lead" },
  ];

  return (
    <section className="members">
      <div className="members-header">
        <h2>Meet Our Volunteers</h2>
        <p>
          Dedicated individuals driving real change across communities with
          their passion.
        </p>
      </div>

      <div className="members-row">
        {members.map((m) => (
          <div className="member-card" key={m.id}>
            <img src={m.image} alt={m.name} />
            <h3>{m.name}</h3>
            <span>{m.role}</span>
          </div>
        ))}
      </div>

      <style>{`
        .members {
          padding: 100px 8%;
          background: #f8fafc;
        }

        .members-header {
          max-width: 650px;
          margin-bottom: 50px;
          text-align: center;
        }

        .members-header h2 {
          font-size: 42px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .members-header p {
          color: #475569;
          font-size: 16px;
          line-height: 1.7;
        }

        .members-row {
          display: flex;
          gap: 30px;
          overflow-x: auto;
          padding-bottom: 20px;
        }

        .members-row::-webkit-scrollbar {
          height: 6px;
        }

        .members-row::-webkit-scrollbar-thumb {
          background: #6366f1;
          border-radius: 10px;
        }

        .member-card {
          min-width: 240px;
          background: #ffffff;
          border-radius: 24px;
          padding: 28px;
          text-align: center;
          flex-shrink: 0;
          box-shadow: 0 35px 90px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .member-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 50px 110px rgba(0,0,0,0.15);
        }

        .member-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-radius: 20px;
          margin-bottom: 16px;
        }

        .member-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
        }

        .member-card span {
          font-size: 14px;
          color: #6366f1;
          font-weight: 600;
        }

        @media(max-width:768px){
          .members-row {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Members;
