import React, { useState } from "react";
import "../styling/findCandidates.css";
import { useNavigate } from "react-router";
import axios from "axios";
function FindCandidates() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    jobdomain: "",
    location: "",
    description: "",
    minsalary: 0,
    maxsalary: "",
    experience: "",
  });

  //const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/comp/job/", {
        data: {
          compid: "compid69",
          jobid: "jobid1",
          date: "2022-04-01",
          jobdomain: "Software",
          experience: 7,
          minsalary: 100,
          maxsalary: 1000,
          description: "Description 1",
          location: "Mumbai",
        },
      })
      .then((res) => {
        console.log(res.data);
        // if (res.data.status_code === 0) {
        //   navigate("/");
        // } else {
        //   alert(res.data.status_msg);
        // }
      })
      .catch((e) => {
        console.log(e);
      });
    // const newUser = { ...user, id: new Date().getTime().toString() };
    // setRecords(...records, newUser);
    // console.log(...records);
  };

  return (
    <div className="container can">
      <h4 className="wel">
        Welcome, <b>ABC Co. Ltd.</b> Create a job posting now!
      </h4>
      <form onSubmit={handleSubmit}>
        {console.log(user)}
        <div className="card">
          <div className="card-header">Enter location.</div>
          <div className="card-body">
            <input
              type="text"
              name="location"
              onChange={handleInput}
              className="form-control"
              id="location"
              placeholder="eg: Mumbai, Maharashtra"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Enter min experience.</div>
          <div className="card-body">
            <input
              type="text"
              name="experience"
              onChange={handleInput}
              className="form-control"
              id="experience"
              placeholder="eg: 0 or 1"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Enter job description.</div>
          <div className="card-body">
            <input
              type="textarea"
              name="description"
              onChange={handleInput}
              className="form-control"
              id="description"
              placeholder="eg: job: beginner level, need to know python3 and relevant python libraries, etc"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Enter max pay range.</div>
          <div className="card-body">
            <input
              type="number"
              name="maxsalary"
              onChange={handleInput}
              className="form-control"
              id="maxsalary"
              placeholder="eg: 15000"
            />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Select job type.</div>
          <div className="card-body">
            <label>
              Job Role
              <select name="jobdomain" onChange={handleInput}>
                <option value="Data Analyst">Data Analyst</option>
                <option value="App Developer">App Developer</option>
                <option value="Web Developer">Web Developer</option>
              </select>
            </label>
          </div>
        </div>
      </form>
      <a href="/createTest">
        <input type="button" className="btn btn-lg b" value="Next" />
      </a>
    </div>
  );
}

export default FindCandidates;
