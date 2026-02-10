import React from "react";

const TermsOfUse = () => {
  return (
    <div className="legal-page">
      <div className="legal-card">
        <h1>Terms of Use</h1>

        <p>
          These Terms of Use govern access to and use of this platform. By
          accessing or using the website, you agree to be bound by these terms.
        </p>

        <h3>1. Educational Purpose</h3>
        <p>
          This platform is developed solely as an academic project for learning
          and demonstration purposes. It is not intended for commercial,
          financial, or charitable operations.
        </p>

        <h3>2. No Real Donations</h3>
        <p>
          Any cryptocurrency transactions conducted on this platform are for
          testing and demonstration only and must not be considered real
          donations or financial contributions.
        </p>

        <h3>3. No Financial Liability</h3>
        <p>
          The platform owner assumes no responsibility for financial loss,
          failed transactions, or misuse of funds arising from test payments.
        </p>

        <h3>4. User Responsibilities</h3>
        <p>
          Users agree not to misuse the platform for illegal, fraudulent, or
          unauthorized activities, including attempts to exploit system
          vulnerabilities.
        </p>

        <h3>5. Third-Party Services</h3>
        <p>
          Cryptocurrency payments are processed by third-party providers such as
          Cryptomus. The platform is not responsible for their services,
          performance, or policies.
        </p>

        <h3>6. Access Limitation</h3>
        <p>
          The platform reserves the right to restrict, suspend, or terminate
          access without notice if misuse or suspicious activity is detected.
        </p>

        <h3>7. Modifications</h3>
        <p>
          These Terms of Use may be updated at any time. Continued use of the
          platform constitutes acceptance of the revised terms.
        </p>
      </div>

      <style>{`
        .legal-page {
          background: radial-gradient(
            circle at top,
            #eef2ff 0%,
            #ffffff 40%,
            #f8fafc 100%
          );
          padding: 60px 20px;
          min-height: 100vh;
        }

        .legal-card {
          max-width: 900px;
          margin: auto;
          background: #ffffff;
          padding: 45px 50px;
          border-radius: 18px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.06);
        }

        .legal-card h1 {
          font-size: 34px;
          margin-bottom: 25px;
          color: #4338ca;
        }

        .legal-card h3 {
          margin-top: 30px;
          margin-bottom: 10px;
          font-size: 18px;
          color: #1e1b4b;
        }

        .legal-card p {
          font-size: 15.5px;
          line-height: 1.7;
          color: #374151;
        }

        @media (max-width: 600px) {
          .legal-card {
            padding: 30px 25px;
          }

          .legal-card h1 {
            font-size: 26px;
          }
        }
      `}</style>
    </div>
  );
};

export default TermsOfUse;