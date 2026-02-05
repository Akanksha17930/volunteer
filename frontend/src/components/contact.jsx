import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, phone, message },
        { headers: { "Content-Type": "application/json" } }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section className="contact-page">
      {/* HERO */}
      <div className="contact-hero">
        <span className="badge">Contact Us</span>
        <h1>
          We’d Love to <span>Hear From You</span>
        </h1>
        <p>
          Whether you have a question, suggestion, or want to support a cause —
          reach out and we’ll respond soon.
        </p>
      </div>

      {/* FORM */}
      <div className="contact-wrapper">
        <div className="contact-form">
          <h2>Send a Message</h2>

          <form onSubmit={handleSendMessage}>
            <div className="form-row">
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <input
              type="number"
              value={phone}
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <textarea
              rows="6"
              value={message}
              placeholder="Write your message here..."
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .contact-page {
          background: radial-gradient(
            circle at top,
            #eef2ff 0%,
            #ffffff 45%,
            #f8fafc 100%
          );
        }

        /* HERO (reduced space) */
        .contact-hero {
          text-align: center;
          padding: 70px 8% 40px; /* reduced navbar gap */
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

        .contact-hero h1 {
          font-size: 46px;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 16px;
        }

        .contact-hero h1 span {
          background: linear-gradient(90deg, #6366f1, #22d3ee);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-hero p {
          max-width: 560px;
          margin: auto;
          color: #475569;
          font-size: 17px;
          line-height: 1.7;
        }

        /* CENTERED FORM */
        .contact-wrapper {
          display: flex;
          justify-content: center;
          padding: 40px 8% 110px;
        }

        .contact-form {
          width: 100%;
          max-width: 640px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(14px);
          border-radius: 28px;
          padding: 50px;
          box-shadow: 0 45px 100px rgba(0,0,0,0.12);
        }

        .contact-form h2 {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 28px;
          text-align: center;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 18px;
          border-radius: 14px;
          border: 1px solid #e5e7eb;
          font-size: 15px;
          outline: none;
          margin-bottom: 18px;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #6366f1;
        }

        .contact-form button {
          width: 100%;
          padding: 16px;
          border-radius: 999px;
          border: none;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          background: linear-gradient(90deg, #6366f1, #4f46e5);
          color: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-form button:hover {
          transform: translateY(-3px);
          box-shadow: 0 25px 55px rgba(99,102,241,0.45);
        }

        /* RESPONSIVE */
        @media (max-width: 700px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-form {
            padding: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
