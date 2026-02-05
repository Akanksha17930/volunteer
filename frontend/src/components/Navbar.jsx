import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const closeAll = () => {
    setShow(false);
    setPagesOpen(false);
  };

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        {/* LOGO */}
        <div className="logo">
          <img src="/logo.png" alt="logo" />
          <span className="brand-name">Volunteers</span>
        </div>

        {/* LINKS */}
        <div className="links">
          <ul className="menu">
            <li>
              <Link to="/" onClick={closeAll}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={closeAll}>About</Link>
            </li>

            <li>
              <Link to="/causes" onClick={closeAll}>Causes</Link>
            </li>

            {/* PAGES DROPDOWN */}
            <li className="pages">
              <span onClick={() => setPagesOpen(!pagesOpen)}>
                Pages ▾
              </span>

              {pagesOpen && (
                <ul className="dropdown">
                  <li>
                    <Link to="/details/1" onClick={closeAll}>
                      Detail Page
                    </Link>
                  </li>
                  <li>
                    <Link to="/causes" onClick={closeAll}>
                      What We Do
                    </Link>
                  </li>
                  <li>
                    <Link to="/members" onClick={closeAll}>
                      Meet The Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/donate" onClick={closeAll}>
                      Donate
                    </Link>
                  </li>
                  <li>
                    <Link to="/volunteer" onClick={closeAll}>
                      Become Volunteer
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" onClick={closeAll}>Contact</Link>
            </li>
          </ul>

          <Link to="/donate" className="donate-btn" onClick={closeAll}>
            Donate Now
          </Link>
        </div>

        {/* HAMBURGER */}
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setShow(!show)}
        />
      </nav>

      {/* STYLES */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 26px 10%;
          background: linear-gradient(135deg, #6366f1, #4f46e5);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-name {
          font-size: 30px;
          font-weight: 700;
          color: #ffffff;
        }

        .logo img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .links {
          display: flex;
          align-items: center;
          gap: 45px;
        }

        .menu {
          display: flex;
          list-style: none;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .menu a,
        .pages span {
          color: #ffffff;
          font-weight: 600;
          font-size: 18px;
          text-decoration: none;
          cursor: pointer;
        }

        .pages {
          position: relative;
        }

        .dropdown {
          position: absolute;
          top: 40px;
          left: 0;
          background: white;
          list-style: none;
          padding: 10px 0;
          border-radius: 10px;
          min-width: 200px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.25);
        }

        .dropdown li {
          padding: 10px 20px;
        }

        .dropdown a {
          color: #1e3a8a;
          font-weight: 600;
        }

        .dropdown li:hover {
          background: #facc15;
        }

        .donate-btn {
          background: #facc15;
          color: #1e3a8a;
          padding: 14px 28px;
          border-radius: 999px;
          font-weight: 700;
          text-decoration: none;
        }

        .hamburger {
          display: none;
          font-size: 32px;
          color: #ffffff;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: #4f46e5;
            flex-direction: column;
            padding: 28px 0;
            transform: translateY(-500px);
            transition: 0.35s ease;
          }

          .navbar.show_navbar .links {
            transform: translateY(0);
          }

          .menu {
            flex-direction: column;
            align-items: center;
          }

          .dropdown {
            position: static;
            background: #4338ca;
            box-shadow: none;
          }

          .dropdown a {
            color: white;
          }

          .hamburger {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
