import React from "react";

const Members = () => {
  return (
    <>
      <section className="team-page">
        <h1>Meet Our Team</h1>
        <p>
          Our dedicated volunteers and team members work tirelessly to make
          a positive impact in the community.
        </p>

        <div className="team-grid">
          <div className="member-card">
            <img src="/member-1.jpg" alt="member" />
            <h3>Rahul Sharma</h3>
            <span>Founder</span>
          </div>

          <div className="member-card">
            <img src="/member-2.jpg" alt="member" />
            <h3>Anjali Verma</h3>
            <span>Volunteer Lead</span>
          </div>

          <div className="member-card">
            <img src="/member-3.jpg" alt="member" />
            <h3>Rohan Patil</h3>
            <span>Event Manager</span>
          </div>
        </div>
      </section>

      <style>{`
        .team-page {
          padding: 80px 10%;
          text-align: center;
        }

        .team-page h1 {
          font-size: 42px;
          margin-bottom: 10px;
        }

        .team-page p {
          max-width: 700px;
          margin: 0 auto 50px;
          color: #555;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .member-card {
          background: white;
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        .member-card img {
          width: 100%;
          border-radius: 50%;
          margin-bottom: 15px;
        }

        .member-card h3 {
          margin: 10px 0 5px;
        }

        .member-card span {
          color: #6366f1;
          font-weight: 600;
        }
      `}</style>
    </>
  );
};

export default Members;
