import React, { useState } from "react";
import Login from "../img/login.png";
import axios from "axios";
import { useNavigate } from "react-router";
import "../styling/register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    qualification: "",
  });

  //const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newUser = { ...user, id: new Date().getTime().toString() };
    // setRecords([...records, newUser]);
    // console.log(records);
    axios
      .post("http://127.0.0.1:8000/cand/candidate/", {
        data: {
          cand_email: user.email,
          cand_name: user.name,
          cand_qualification: user.qualification,
          cand_password: user.password,
        },
      })
      .then((res) => {
        if (res.data.status_code === 0) {
          navigate("/login");
        } else {
          alert(res.data.status_msg);
        }
      })
      .catch((e) => {
        console.log(e);
      });
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
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInput}
            className="form-control"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Qualification
          </label>
          <input
            type="text"
            name="qualification"
            value={user.qualification}
            onChange={handleInput}
            className="form-control"
            id="qualification"
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
        <button type="submit" className="btn btn-primary">
          Register Now
        </button>
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
