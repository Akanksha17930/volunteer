import React from "react";

const AML = () => {
  return (
    <div className="legal-page">
      <div className="legal-card">
        <h1>Anti-Money Laundering (AML) Policy</h1>

        <p>
          This Anti-Money Laundering (AML) Policy outlines the platform’s
          commitment to preventing misuse for illegal or unlawful activities.
        </p>

        <h3>1. Educational Use Only</h3>
        <p>
          This platform is created solely for academic and educational purposes
          and does not operate as a financial institution or money service
          business.
        </p>

        <h3>2. Prohibited Activities</h3>
        <p>
          The use of this platform for money laundering, terrorist financing,
          fraud, or any unlawful activity is strictly prohibited.
        </p>

        <h3>3. Transaction Processing</h3>
        <p>
          Cryptocurrency transactions are handled by a third-party provider
          (Cryptomus), which applies its own compliance, monitoring, and
          security procedures.
        </p>

        <h3>4. Monitoring & Restrictions</h3>
        <p>
          The platform reserves the right to restrict or suspend access if
          suspicious or unlawful behavior is detected.
        </p>

        <h3>5. No Transaction Guarantees</h3>
        <p>
          The platform does not guarantee successful processing of transactions
          and assumes no responsibility for failed or rejected payments.
        </p>

        <h3>6. Compliance Statement</h3>
        <p>
          Although not legally required to conduct AML or KYC checks due to its
          educational nature, the platform supports lawful usage and regulatory
          cooperation where applicable.
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

export default AML;