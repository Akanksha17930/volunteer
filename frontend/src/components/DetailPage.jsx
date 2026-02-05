import React, { useState } from "react";

const DetailPage = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your comment! It will be reviewed shortly.");
    setComment({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="detail-container">
        {/* ================= MAIN CONTENT ================= */}
        <div className="detail-main">
          <h1 className="page-title">
            Empowering Children Through Education & Care
          </h1>

          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
            alt="Education Campaign"
            className="main-image"
          />

          <p className="intro-text">
            Education is the foundation of a strong and progressive society.
            Through this campaign, we aim to support underprivileged children by
            providing access to quality education, nutrition, and emotional
            support. Every contribution helps transform lives and build a better
            future.
          </p>

          <h2>About This Campaign</h2>
          <p>
            Millions of children around the world are forced to drop out of
            school due to poverty, lack of resources, or social challenges. Our
            initiative focuses on identifying such children and enrolling them
            in safe learning environments while supporting their families.
          </p>
          <p>
            We work closely with local schools, volunteers, and community
            leaders to ensure that children receive consistent education and
            mentorship.
          </p>

          <h2>How Your Donation Is Used</h2>
          <ul className="support-list">
            <li>📚 School admissions, books, and learning materials</li>
            <li>🎒 Uniforms, bags, and stationery</li>
            <li>🍽️ Nutritious meals to support healthy growth</li>
            <li>👩‍🏫 Teacher salaries and mentoring programs</li>
            <li>💻 Digital education tools and internet access</li>
          </ul>

          <div className="stats-box">
            <div>
              <h4>Goal</h4>
              <p>₹5,00,000</p>
            </div>
            <div>
              <h4>Raised</h4>
              <p>₹3,72,450</p>
            </div>
            <div>
              <h4>Beneficiaries</h4>
              <p>150+ Children</p>
            </div>
          </div>

          <h2>Impact & Transparency</h2>
          <p>
            Transparency is at the core of our mission. We provide regular
            updates to donors, including financial reports, progress updates,
            and success stories from the ground.
          </p>
          <p>
            Our organization ensures that over 90% of funds directly support
            programs, maximizing real-world impact.
          </p>

          {/* TAGS */}
          <div className="tags">
            <span>Education</span>
            <span>Child Welfare</span>
            <span>Donation</span>
            <span>NGO</span>
            <span>Social Impact</span>
          </div>

          {/* AUTHOR */}
          <div className="author-box">
            <img src="https://i.pravatar.cc/100?img=32" alt="Author" />
            <div>
              <h4>Rohit Mehta</h4>
              <p>
                Campaign Manager at HopeCare Foundation with over a decade of
                experience in education reform and social development programs.
              </p>
            </div>
          </div>

          {/* ================= RELATED BLOG POSTS ================= */}
          <h2 className="section-title">Related Blog Posts</h2>

          <div className="blog-posts">
            <div className="blog-card">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Blog 1"
              />
              <div>
                <h4>Why Education Is the Key to Ending Poverty</h4>
                <p>
                  Education empowers individuals, improves economic stability,
                  and creates opportunities for future generations.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <img
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6"
                alt="Blog 2"
              />
              <div>
                <h4>The Role of Community Support in Child Development</h4>
                <p>
                  Community-driven initiatives play a vital role in shaping a
                  child’s emotional and educational growth.
                </p>
              </div>
            </div>

            <div className="blog-card">
              <img
                src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0"
                alt="Blog 3"
              />
              <div>
                <h4>How Donations Create Long-Term Impact</h4>
                <p>
                  Small contributions collectively make a massive difference
                  when invested wisely and transparently.
                </p>
              </div>
            </div>
          </div>

          {/* ================= COMMENT FORM ================= */}
          <h2 className="section-title">Leave a Comment</h2>

          <form className="comment-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={comment.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={comment.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your comment..."
              value={comment.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Post Comment</button>
          </form>
        </div>

        {/* ================= SIDEBAR ================= */}
        <div className="detail-sidebar">
          <div className="sidebar-box">
            <input type="text" placeholder="Search blogs or campaigns..." />
          </div>

          <div className="sidebar-box">
            <h3>Recent Campaigns</h3>

            <div className="recent-post">
              <img src="https://images.unsplash.com/photo-1544027993-37dbfe43562a" alt="" />
              <div>
                <p>Feed Hungry Children</p>
                <small>Nutrition & Food Relief</small>
              </div>
            </div>

            <div className="recent-post">
              <img src="/Detail-5.jpg" alt="" />
              <div>
                <p>Rural Healthcare Drive</p>
                <small>Medical Support</small>
              </div>
            </div>

            <div className="recent-post">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" alt="" />
              <div>
                <p>Women Skill Training</p>
                <small>Empowerment</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`
        .detail-container {
          display: flex;
          gap: 30px;
          padding: 50px 8%;
          background: #f8fafc;
        }

        .detail-main {
          flex: 3;
          background: #fff;
          padding: 40px;
          border-radius: 12px;
        }

        .page-title {
          text-align: center;
          color: black;
          margin-bottom: 30px;
        }

        .main-image {
          width: 100%;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        .intro-text {
          font-size: 16px;
          color: #444;
          margin-bottom: 25px;
        }

        .detail-main p {
          line-height: 1.8;
          color: #555;
          margin-bottom: 15px;
        }

        .support-list li {
          margin: 10px 0;
        }

        .stats-box {
          display: flex;
          justify-content: space-between;
          background: #f0fdf4;
          padding: 20px;
          border-radius: 10px;
          margin: 30px 0;
          text-align: center;
        }

        .tags span {
          background: #ecfeff;
          padding: 6px 14px;
          border-radius: 20px;
          margin-right: 8px;
          font-size: 14px;
        }

        .author-box {
          display: flex;
          gap: 15px;
          background: #f1f5f9;
          padding: 20px;
          border-radius: 10px;
          margin-top: 40px;
        }

        .blog-posts {
          display: grid;
          gap: 20px;
          margin-bottom: 40px;
        }

        .blog-card {
          display: flex;
          gap: 15px;
          background: #f9fafb;
          padding: 15px;
          border-radius: 10px;
        }

        .blog-card img {
          width: 120px;
          border-radius: 8px;
          object-fit: cover;
        }

        .comment-form input,
        .comment-form textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }

        .comment-form button {
          padding: 12px 25px;
          background: #166534;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .detail-sidebar {
          flex: 1.2;
        }

        .sidebar-box {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 25px;
        }

        .recent-post {
          display: flex;
          gap: 10px;
          margin-top: 15px;
        }

        .recent-post img {
          width: 70px;
          height: 60px;
          border-radius: 6px;
          object-fit: cover;
        }

        @media (max-width: 900px) {
          .detail-container {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default DetailPage;
