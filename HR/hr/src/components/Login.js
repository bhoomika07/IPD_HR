import React, { useState } from "react";
import Loginimg from "../img/login.png";
import "../styling/register.css";
import { useNavigate } from "react-router";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/cand/candidateLogin/", {
        data: {
          cand_email: user.email,
          cand_password: user.password,
        },
      })
      .then((res) => {
        if (res.data.status_code === 0) {
          navigate("/");
        } else {
          alert(res.data.status_msg);
        }
      })
      .catch((e) => {
        console.log(e);
      });
    // const newUser = { ...user, id: new Date().getTime().toString() };
    // setRecords(...records, newUser);
    // console.log(...records);
  };

  return (
    <>
      <h4>
        Welcome back <i>Job</i>Solutions
      </h4>
      <img src={Loginimg} alt="login" />
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInput}
            className="form-control"
            id="email"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            required
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            className="form-control"
            id="password"
          />
        </div>

        <div className="row">
          <span>Forgot your password?</span>
        </div>

        {/* <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            I am a recruiter. I am here to register my company.
          </label>
        </div> */}
        <div className="row">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>

        <p>
          Don't have an account?<a href="/register">Register</a>
        </p>
      </form>
    </>
  );
};

export default Login;
