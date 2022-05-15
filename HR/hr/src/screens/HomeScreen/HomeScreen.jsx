import React, { useState, useEffect } from "react";
import { JobCard } from "../../components";
import { Row, Col } from "react-bootstrap";
import Vector from "./Vector.svg";
import "./homescreen.css";
import axios from "axios";

function HomeScreen() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const data = async () =>
      await axios
        .get("http://127.0.0.1:8000/comp/job/")
        .then((res) => {
          console.log(res.data);
          setJobs(res.data);
        })
        .catch((e) => console.log(e));
    data();
  }, []);
  return (
    <div>
      <div style={{ padding: "0px 0 0 70px" }}>
        <div
          style={{ padding: "0 50px 0 0" }}
          className="d-flex justify-content-around"
        >
          <input
            className="search_job"
            type="text"
            placeholder="   💼 Search Jobs"
            aria-label="Search"
          />
          <input
            className="search_loc"
            type="text"
            placeholder="   📍 Find location"
            aria-label="Search"
          />
          <div>
            <img style={{ paddingRight: "20px" }} src={Vector} alt="filter" />
            <button className="find_btn">Find Job</button>
          </div>
        </div>
        <Row>
          {jobs &&
            jobs.map((x) => {
              return (
                <Col key={x.compid} style={{ padding: " 0 30px" }} lg={6}>
                  <JobCard job={x} compid={x.compid} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}

export default HomeScreen;
