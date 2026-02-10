import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <div className="legal-card">
        <h1>Privacy Policy</h1>

        <p>
          This Privacy Policy describes how information is collected, used, and
          protected when users access or interact with this platform.
        </p>

        <h3>1. Purpose of the Platform</h3>
        <p>
          This website is developed solely as an academic and educational
          project. It is not operated as a commercial service, financial
          institution, or registered charitable organization.
        </p>

        <h3>2. Information Collection</h3>
        <p>
          Limited personal information such as name or email address may be
          collected voluntarily through contact or inquiry forms. No sensitive
          financial data is stored by this platform.
        </p>

        <h3>3. Cryptocurrency Transactions</h3>
        <p>
          All cryptocurrency payments are processed by a third-party payment
          provider (Cryptomus). The platform does not store wallet credentials
          or payment details.
        </p>

        <h3>4. Use of Information</h3>
        <p>
          Collected information is used strictly for educational demonstration,
          platform functionality, and communication purposes.
        </p>

        <h3>5. Data Security</h3>
        <p>
          Reasonable security measures are applied; however, no internet-based
          system can be guaranteed as completely secure.
        </p>

        <h3>6. Third-Party Services</h3>
        <p>
          This platform may contain links to third-party services. We are not
          responsible for their privacy practices.
        </p>

        <h3>7. Policy Updates</h3>
        <p>
          This Privacy Policy may be updated periodically. Continued use of the
          platform indicates acceptance of these changes.
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

export default PrivacyPolicy;