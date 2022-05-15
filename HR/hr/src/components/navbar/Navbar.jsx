import React, { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import JobSolutions from "../../JobSolutions.svg";
import Vector39 from "../../Vector39.svg";
import "./navbar.css";
import { useNavigate } from "react-router";

const Navbar = ({ isLogout, setIsLogout }) => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {}, [isLogout]);

  return (
    <div className="gpt3__navbar">
      <div style={{ marginTop: "15px" }} className="gpt3__navbar-links">
        <div
          style={{ marginTop: "18px", cursor: "pointer" }}
          className="gpt3__navbar-links_logo"
          onClick={(e) => navigate("/home")}
        >
          <img src={JobSolutions} alt="logo" />
          <br />
          <img src={Vector39} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          {JSON.parse(localStorage.getItem("uData")) !== null &&
            (JSON.parse(localStorage.getItem("uData"))["cand_name"] ? (
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
            ) : JSON.parse(localStorage.getItem("uData"))["compid"] ? (
              <p>
                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "25px",
                  }}
                  href="/applications"
                >
                  Applications
                </a>
              </p>
            ) : null)}

          <p>
            {JSON.parse(localStorage.getItem("uData")) !== null &&
              (JSON.parse(localStorage.getItem("uData"))["cand_name"] ? (
                <a
                  style={{
                    color: "black",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "25px",
                  }}
                  href="/records2"
                >
                  Job Status
                </a>
              ) : JSON.parse(localStorage.getItem("uData"))["compid"] ? (
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
              ) : (
                "xx"
              ))}
          </p>
        </div>
      </div>
      <div style={{ marginTop: "15px" }} className="gpt3__navbar-sign">
        {isLogout && (
          <>
            <p style={{ color: "black" }}>
              <a href="/login">Log in</a>
            </p>
            <button type="button">
              <a href="/register" style={{ color: "white" }}>
                Register Now
              </a>
            </button>
          </>
        )}
        {!isLogout && (
          <button
            onClick={(e) => {
              localStorage.clear();
              navigate("/home");
              setIsLogout(true);
            }}
            type="button"
          >
            Logout
          </button>
        )}
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
                  Find Jobss
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
              <button
                onClick={(e) => {
                  localStorage.clear();
                  navigate("/home");
                  setIsLogout(true);
                }}
                type="button"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
