import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import JobSolutions from "../../JobSolutions.svg";
import Vector39 from "../../Vector39.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div style={{ marginTop: "15px" }} className="gpt3__navbar-links">
        <div style={{ marginTop: "18px" }} className="gpt3__navbar-links_logo">
          <img src={JobSolutions} alt="logo" />
          <br />
          <img src={Vector39} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "25px",
              }}
              href="/home"
            >
              Home
            </a>
          </p>
          <p>
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "25px",
              }}
              href="/"
            >
              Find Jobs
            </a>
          </p>
          <p>
            <a
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "500",
                fontSize: "25px",
              }}
              href="/findCandidates"
            >
              Find Candidates
            </a>
          </p>
        </div>
      </div>
      <div style={{ marginTop: "15px" }} className="gpt3__navbar-sign">
        <p style={{ color: "black" }}>
          <a href="/login">Log in</a>
        </p>
        <button type="button">
          <a href="/register" style={{ color: "white" }}>
            Register Now
          </a>
        </button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a
                  style={{ textDecoration: "none", fontSize: "20px" }}
                  href="/"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", fontSize: "20px" }}
                  href="/findCandidates"
                >
                  Find Jobs
                </a>
              </p>
              <p>
                <a
                  style={{ textDecoration: "none", fontSize: "20px" }}
                  href="/findCandidates"
                >
                  Find Candidates
                </a>
              </p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <a href="/login">Log in</a>
              <button type="button">
                <a href="/register">Register Now</a>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
