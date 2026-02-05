import React, { useState } from "react";
import axios from "axios";

const Donate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      setDisableBtn(true);
      const res = await axios.post(
        "http://localhost:4000/api/v1/checkout",
        { name, email, message, amount },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      window.location.href = res.data.result.url;
    } catch (error) {
      setDisableBtn(false);
      console.error(error);
    }
  };

  return (
    <section className="donate-page">
      {/* HERO */}
      <div className="donate-hero">
        <span className="badge">Crypto Donation</span>
        <h1>
          Make a <span>Secure Donation</span>
        </h1>
        <p>
          Support verified causes using cryptocurrency with full transparency
          and global reach.
        </p>
      </div>

      {/* FORM */}
      <div className="donate-wrapper">
        <form className="donate-card" onSubmit={handleCheckout}>
          <div className="logo-box">
            <img src="/logo.png" alt="logo" />
          </div>

          <h2>Your Contribution</h2>

          <div className="amount-box">
            <label>Donation Amount (USD)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>

          <textarea
            rows="4"
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit" disabled={disableBtn}>
            {disableBtn
              ? "Redirecting..."
              : `Donate ${amount ? `$${amount}` : "$0"}`}
          </button>

          <p className="note">
            🔒 Payments are processed securely using cryptocurrency checkout.
          </p>
        </form>
      </div>

      {/* STYLES */}
      <style>{`
        .donate-page {
          background: radial-gradient(
            circle at top,
            #eef2ff 0%,
            #ffffff 45%,
            #f8fafc 100%
          );
        }

        /* HERO */
        .donate-hero {
          text-align: center;
          padding: 70px 8% 40px;
        }

        .badge {
          display: inline-block;
          background: rgba(99,102,241,0.15);
          color: #4f46e5;
          padding: 8px 18px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .donate-hero h1 {
          font-size: 46px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .donate-hero h1 span {
          background: linear-gradient(90deg, #6366f1, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .donate-hero p {
          max-width: 560px;
          margin: auto;
          color: #475569;
          font-size: 17px;
          line-height: 1.7;
        }

        /* FORM WRAPPER */
        .donate-wrapper {
          display: flex;
          justify-content: center;
          padding: 40px 8% 110px;
        }

        .donate-card {
          width: 100%;
          max-width: 620px;
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(14px);
          border-radius: 30px;
          padding: 50px;
          box-shadow: 0 45px 110px rgba(0,0,0,0.14);
          text-align: center;
        }

        .logo-box {
          margin-bottom: 22px;
        }

        .logo-box img {
          width: 140px;
        }

        .donate-card h2 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 28px;
        }

        .amount-box {
          margin-bottom: 24px;
          text-align: left;
        }

        .amount-box label {
          font-size: 14px;
          font-weight: 600;
          color: #475569;
          display: block;
          margin-bottom: 8px;
        }

        .amount-box input {
          width: 100%;
          padding: 16px;
          font-size: 18px;
          font-weight: 700;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          outline: none;
        }

        .amount-box input:focus {
          border-color: #6366f1;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          margin-bottom: 18px;
        }

        .donate-card input,
        .donate-card textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          font-size: 15px;
          outline: none;
        }

        .donate-card textarea {
          margin-bottom: 22px;
        }

        .donate-card input:focus,
        .donate-card textarea:focus {
          border-color: #6366f1;
        }

        .donate-card button {
          width: 100%;
          padding: 16px;
          border-radius: 999px;
          border: none;
          font-size: 17px;
          font-weight: 700;
          cursor: pointer;
          background: linear-gradient(90deg, #6366f1, #4f46e5);
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .donate-card button:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 25px 55px rgba(99,102,241,0.45);
        }

        .donate-card button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .note {
          margin-top: 18px;
          font-size: 14px;
          color: #64748b;
        }

        /* RESPONSIVE */
        @media (max-width: 700px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .donate-card {
            padding: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Donate;
