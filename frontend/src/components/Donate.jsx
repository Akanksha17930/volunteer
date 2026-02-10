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
        `${process.env.REACT_APP_API_URL}/api/v1/checkout`,
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

          {/* EXISTING NOTE */}
          <p className="note">
            🔒 Payments are processed securely via a third-party cryptocurrency
            payment provider.
          </p>

          {/* Cryptomus compliance text */}
          <p className="legal-text">
            This platform is created for educational and demonstration purposes
            only. It does not operate as a financial institution, payment
            processor, or money service business.
          </p>

          <p className="legal-text">
            All cryptocurrency payments are handled externally by a licensed
            third-party provider. We do not store, process, or control user
            funds at any stage.
          </p>

          <p className="legal-text">
            By continuing, you confirm that your donation is lawful and does
            not involve prohibited activities such as fraud, money laundering,
            or terrorist financing.
          </p>
        </form>
      </div>

      {/* STYLES — unchanged */}
      <style>{`
        .donate-page {
          background: radial-gradient(
            circle at top,
            #eef2ff 0%,
            #ffffff 45%,
            #f8fafc 100%
          );
        }

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

        .logo-box img {
          width: 140px;
        }

        .donate-card h2 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 28px;
        }

        .amount-box input,
        .donate-card input,
        .donate-card textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          font-size: 15px;
          outline: none;
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
        }

        .note {
          margin-top: 18px;
          font-size: 14px;
          color: #64748b;
        }

        .legal-text {
          margin-top: 10px;
          font-size: 12.5px;
          line-height: 1.6;
          color: #6b7280;
        }

        @media (max-width: 700px) {
          .donate-card {
            padding: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Donate;