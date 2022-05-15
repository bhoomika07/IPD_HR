import React from "react";
import "../styling/PerformanceDash.css";
import { PieChart } from "react-minimal-pie-chart";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function PerformanceDash() {
  const location = useLocation();
  return (
    <div className="container con">
      <h4>
        Performance Analysis - <b>{location.state.comp_name}</b>
      </h4>
      <br />
      <div className="row">
        <div className="col">
          <div className="card perf ap">
            <div className="card-header">Aptitude Analysis</div>
            <div className="card-body">
              <p>{location.state.score}%</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card perf">
            <div className="card-header">Personality Analysis</div>
            <div className="card-body pie">
              <PieChart
                data={[
                  { title: "INFP", value: 10, color: "rgb(255, 99, 132)" },
                  { title: "INFJ", value: 15, color: "rgb(54, 162, 235)" },
                  { title: "INTP", value: 20, color: "rgb(255, 205, 86)" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="card perf">
        <div className="card-header">Competitive Analysis</div>
        <div className="card-body">
          <h5 align="left">Candidate Aptitude Progress</h5>
          <ProgressBar
            variant="success"
            now={location.state.score}
            label={`${location.state.score}%`}
          />
          <br />
          <h5 align="left">Best Scorer Aptitude Progress</h5>
          <ProgressBar variant="success" now={100} label={`100%`} />
          <br />
        </div>
      </div>
      <div className="card perf">
        <div className="card-header">Best Fit Job Role</div>
        <div className="card-body">
          This candidate is highly suited for the position of{" "}
          <b>Business Analyst</b> based on his CV and personality analysis.
        </div>
      </div>
    </div>
  );
}

export default PerformanceDash;
