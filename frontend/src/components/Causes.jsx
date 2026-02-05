import React from "react";
import { useNavigate, useParams } from "react-router-dom";

/* ===================== CAMPAIGN DATA ===================== */
const campaigns = [
  {
    id: "1",
    title: "Healthy Food for Children",
    image: "/Feed Hungry Children.jpg",
    description:
      "Millions of children sleep hungry every day. This campaign provides nutritious daily meals to underprivileged children, helping them grow healthy, active, and ready to learn.",
    raised: 7200,
    goal: 10000,
  },
  {
    id: "2",
    title: "Medical Aid for the Needy",
    image: "/health.jpg",
    description:
      "Access to healthcare is a basic right. Your support helps low-income families receive life-saving treatments, medicines, and emergency medical support.",
    raised: 4500,
    goal: 8000,
  },
  {
    id: "3",
    title: "Education for Every Child",
    image: "/education-for-all-1.jpg",
    description:
      "Education breaks the cycle of poverty. This campaign supports school fees, books, uniforms, and digital learning resources for children in need.",
    raised: 6200,
    goal: 12000,
  },
];

/* ===================== CAMPAIGNS PAGE ===================== */
export const Campaigns = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ===== WHAT WE DO ===== */}
      <section className="service">
        <div className="section-header">
          <p>OUR MISSION</p>
          <h2>Together, We Create Lasting Change</h2>
        </div>

        <div className="service-grid">
          <ServiceItem
            title="Nutritious Food"
            icon="🥗"
            text="Providing daily meals to underprivileged children and families to fight hunger and malnutrition."
          />
          <ServiceItem
            title="Clean Drinking Water"
            icon="💧"
            text="Ensuring access to safe and clean drinking water in rural and disaster-affected areas."
          />
          <ServiceItem
            title="Healthcare Support"
            icon="🩺"
            text="Offering medical aid, health camps, and emergency care to those who cannot afford treatment."
          />
          <ServiceItem
            title="Quality Education"
            icon="📚"
            text="Supporting school education, digital learning, and scholarships for underprivileged children."
          />
         
        </div>
      </section>

      {/* ===== CAMPAIGNS ===== */}
      <section className="causes-page">
        <h1 className="page-title">Let's know about charity causes around the world</h1>
        <p className="page-subtitle">
          Donate securely using cryptocurrency and track every contribution with full transparency.
        </p>

        <div className="causes-grid">
          {campaigns.map((c) => {
            const progress = (c.raised / c.goal) * 100;

            return (
              <div className="cause-card" key={c.id}>
                <img src={c.image} alt={c.title} />

                <div className="cause-body">
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>

                  <div className="progress-info">
                    <span><strong>Raised:</strong> ${c.raised}</span>
                    <span><strong>Goal:</strong> ${c.goal}</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="btn-group">
                    <button onClick={() => navigate(`/campaign/${c.id}`)}>
                      View Details
                    </button>
                    <button
                      className="primary"
                      onClick={() => navigate("/donate")}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Styles />
    </>
  );
};

/* ===================== SERVICE ITEM ===================== */
const ServiceItem = ({ title, icon, text }) => (
  <div className="service-item">
    <div className="service-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

/* ===================== CAMPAIGN DETAILS ===================== */
export const CampaignDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const campaign = campaigns.find((c) => c.id === id);
  if (!campaign) return <h2 style={{ textAlign: "center" }}>Campaign Not Found</h2>;

  const progress = (campaign.raised / campaign.goal) * 100;

  return (
    <section className="details-page">
      <div className="details-card">
        <img src={campaign.image} alt={campaign.title} />

        <div className="details-content">
          <h1>{campaign.title}</h1>
          <p>{campaign.description}</p>

          <div className="progress-info">
            <strong>${campaign.raised}</strong> raised of ${campaign.goal}
          </div>

          <div className="progress-bar big">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button className="primary" onClick={() => navigate("/donate")}>
            Donate Using Crypto
          </button>
        </div>
      </div>

      <Styles />
    </section>
  );
};

/* ===================== INLINE CSS ===================== */
const Styles = () => (
  <style>{`
    body {
      font-family: 'Segoe UI', sans-serif;
    }

    /* ===== SERVICES ===== */
    .service {
      padding: 90px 6%;
      background: #f8fafc;
      text-align: center;
    }

    .section-header p {
      color: #f59e0b;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 15px 0 60px;
      color: #0f172a;
    }

    .service-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 30px;
    }

    .service-item {
      background: white;
      padding: 40px 30px;
      border-radius: 20px;
      box-shadow: 0 25px 50px rgba(0,0,0,0.08);
      transition: transform 0.3s;
    }

    .service-item:hover {
      transform: translateY(-10px);
    }

    .service-icon {
      font-size: 44px;
      margin-bottom: 20px;
    }

    /* ===== CAMPAIGNS ===== */
    .causes-page {
      padding: 80px 6%;
    }

    .page-title {
      text-align: center;
      font-size: 2.6rem;
      font-weight: 800;
    }

    .page-subtitle {
      text-align: center;
      max-width: 700px;
      margin: 15px auto 60px;
      color: #475569;
    }

    .causes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 40px;
    }

    .cause-card {
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 25px 50px rgba(0,0,0,0.08);
    }

    .cause-card img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }

    .cause-body {
      padding: 28px;
    }

    .progress-bar {
      height: 10px;
      background: #e5e7eb;
      border-radius: 999px;
      overflow: hidden;
      margin: 15px 0 25px;
    }

    .progress-bar.big {
      height: 14px;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #f59e0b, #f97316);
    }

    .btn-group {
      display: flex;
      gap: 12px;
    }

    button {
      flex: 1;
      padding: 12px;
      border-radius: 999px;
      border: 1px solid #f59e0b;
      background: transparent;
      color: #f59e0b;
      font-weight: 600;
      cursor: pointer;
    }

    button.primary {
      background: linear-gradient(90deg, #f59e0b, #f97316);
      color: white;
      border: none;
    }

    /* ===== DETAILS ===== */
    .details-page {
      padding: 90px 6%;
      background: #f8fafc;
    }

    .details-card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      background: white;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 30px 60px rgba(0,0,0,0.1);
    }

    .details-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .details-content {
      padding: 50px;
    }

    @media (max-width: 900px) {
      .details-card {
        grid-template-columns: 1fr;
      }
    }
  `}</style>
);
