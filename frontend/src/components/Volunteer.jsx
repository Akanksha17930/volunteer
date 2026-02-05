import React, { useState } from "react";

const Volunteer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for volunteering! We will contact you soon.");
    setForm({ name: "", email: "", reason: "" });
  };

  return (
    <section className="volunteer-page">
      <div className="volunteer-wrapper">
        {/* FORM WITH IMAGE BACKGROUND */}
        <div
          className="volunteer-card"
          style={{ backgroundImage: "url(/volunteer.jpg)" }}
        >
          <div className="volunteer-card-overlay">
            <h1>Become a Volunteer</h1>
            <p>
              Join our mission to uplift communities and create lasting impact.
              Your contribution can change lives.
            </p>

            <form onSubmit={handleSubmit} className="volunteer-form">
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />

              <textarea
                placeholder="Why do you want to volunteer with us?"
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
                required
              />

              <button type="submit">Submit Application</button>
            </form>
          </div>
        </div>
      </div>

      {/* ===== CSS (SAME PAGE) ===== */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }

        .volunteer-page {
          padding: 100px 20px;
          background: #f8f9fa;
          display: flex;
          justify-content: center;
        }

        .volunteer-wrapper {
          width: 100%;
          max-width: 700px;
        }

        .volunteer-card {
          background-size: cover;
          background-position: center;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
        }

        .volunteer-card-overlay {
          background: rgba(255, 255, 255, 0.92);
          padding: 55px 45px;
          text-align: center;
        }

        .volunteer-card h1 {
          font-size: 38px;
          color: #000; /* BLACK heading */
          margin-bottom: 15px;
          font-weight: 700;
        }

        .volunteer-card p {
          color: #555;
          font-size: 16px;
          margin-bottom: 35px;
          line-height: 1.7;
        }

        .volunteer-form input,
        .volunteer-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 18px;
          border-radius: 10px;
          border: 1px solid #ddd;
          font-size: 15px;
          outline: none;
        }

        .volunteer-form textarea {
          height: 120px;
          resize: none;
        }

        .volunteer-form button {
          width: 100%;
          padding: 14px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
        }

        .volunteer-form button:hover {
          background: #333;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .volunteer-card-overlay {
            padding: 35px 25px;
          }

          .volunteer-card h1 {
            font-size: 30px;
          }
        }
      `}</style>
    </section>
  );
};

export default Volunteer;
