import React from "react";
import { Link } from "react-router-dom";
import {
  FaSquareTwitter,
  FaSquareInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* BRAND */}
          <div className="footer-brand">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* SUPPORT */}
          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>New York, USA</li>
              <li>support@volunteers.org</li>
              <li>+92 123 123 123</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/donate">Donate</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><FaSquareTwitter /> Twitter</li>
              <li><FaYoutube /> YouTube</li>
              <li><FaSquareInstagram /> Instagram</li>
              <li><FaLinkedin /> LinkedIn</li>
            </ul>
          </div>

        </div>
      </footer>

      

      {/* STYLES */}
      <style>{`
        .footer {
          background: linear-gradient(135deg, #5b61f6, #4f46e5);
          color: #ffffff;
          padding: 10px 10% 10px; /* TOP PADDING FIXED */
           border-radius: 18px;          /* SAME CURVE AS NAVBAR */
  
  padding: 15px 60px 15px;
  overflow: hidden;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1fr; /* ONE LINE ALIGNMENT */
          gap: 60px;
          border-bottom: 1px solid rgba(255,255,255,0.25);
          padding-bottom: 45px;
          align-items: flex-start;
          border-radius: 18px;          /* SAME CURVE AS NAVBAR */
  background: rgba(255,255,255,0.06);
  padding: 50px 60px 45px;
  overflow: hidden;
        }

        /* BRAND */
        .footer-brand img {
          width: 170px;
        }

        /* HEADINGS */
        .footer-col h4 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 18px;
          position: relative;
        }

        .footer-col h4::after {
          content: "";
          width: 36px;
          height: 2px;
          background: #facc15;
          display: block;
          margin-top: 8px;
          border-radius: 3px;
        }

        /* LISTS */
        .footer-col ul {
          list-style: none;
          padding: 0;
        }

        .footer-col ul li {
          font-size: 15px;
          margin-bottom: 12px;
          opacity: 0.9;
          transition: all 0.3s ease;
        }

        .footer-col ul li:hover {
          opacity: 1;
          transform: translateX(4px);
        }

        .footer-col a {
          color: #ffffff;
          text-decoration: none;
        }

        /* SOCIAL */
        .social-links li {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .social-links li svg {
          font-size: 22px;
        }

        .social-links li:hover {
          color: #fde047;
        }

        /* COPYRIGHT */
        .footer-bottom {
          background: #4338ca;
          color: #e5e7eb;
          text-align: center;
          padding: 14px;
          font-size: 14px;
          letter-spacing: 0.4px;
           border-radius: 18px;          /* SAME CURVE AS NAVBAR */
 

  overflow: hidden;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
        }

        @media (max-width: 500px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-col h4::after {
            margin-left: auto;
            margin-right: auto;
          }

          .social-links li {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
