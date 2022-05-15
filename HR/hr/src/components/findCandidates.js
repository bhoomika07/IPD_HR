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
          compid: JSON.parse(localStorage.getItem("uData"))["compid"],
          // jobid: "jobid1",
          date: "2022-04-01",
          jobdomain: user.jobdomain,
          jobname: "Software123",
          experience: user.experience,
          minsalary: user.minsalary,
          maxsalary: user.maxsalary,
          description: user.description,
          location: user.location,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status_code === 0) {
          navigate("/createTest", { state: { jobid: res.data.data.jobid } });
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
    <div className="container can">
      <h4 className="wel">
        Welcome, <b>{JSON.parse(localStorage.getItem("uData"))["name"]}</b>{" "}
        Create a job posting now!
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
        <div className="card">
          <div className="card-header">Ask for LinkedIn.</div>
          <div className="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault"
              />
              <label class="form-check-label" for="flexRadioDefault">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault"
              />
              <label class="form-check-label" for="flexRadioDefault">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Ask for Candidate CV.</div>
          <div className="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault1"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault1"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                No
              </label>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">Create an evaluation test?</div>
          <div className="card-body">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault2"
                id="flexRadioDefault2"
              />
              <label class="form-check-label" for="flexRadioDefault2">
                No
              </label>
            </div>
          </div>
        </div>
        <input type="submit" className="btn btn-lg b" value="Next" />
      </form>
    </div>
  );
}

export default FindCandidates;
