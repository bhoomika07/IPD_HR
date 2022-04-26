import React, { useState } from "react";
import Login from "../img/login.png";
import "../styling/register.css";

const Register = () => {
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

    const newUser = { ...user, id: new Date().getTime().toString() };
    setRecords([...records, newUser]);
    console.log(records);
  };

  return (
    <div className="jobsol">
      <h4>
        Register to <i>Job</i>Solutions
      </h4>
      <img src={Login} alt="login" />
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
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
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInput}
            className="form-control"
            id="password"
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            I am a recruiter. I am here to register my company.
          </label>
        </div>
        <input type="button" className="btn btn-lg" value="Register Now" />
        <p>
          Already have an account?{" "}
          <b>
            <i>
              <a href="/login">Sign In</a>
            </i>
          </b>
        </p>
      </form>
    </div>
  );
};

export default Register;
