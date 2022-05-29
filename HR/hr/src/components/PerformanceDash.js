import React, { useEffect, useState } from "react";
import "../styling/PerformanceDash.css";
import { PieChart } from "react-minimal-pie-chart";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";

function PerformanceDash() {
  const [jobs,setJobs] = useState([])
  const [personality,setPersonality] = useState([])
  const location = useLocation();
  useEffect(()=>{
    let datax = "['data','web','app','blah blah']"
    datax = datax.slice(2,datax.length-2)
    let listt = datax.split("','")
    setJobs(listt)

    let datap = "['0.1','0.3','0.1','0.4','0.1','0.3','0.1','0.4','0.1','0.3','0.1','0.4','0.1','0.3','0.1','0.4']"
    datax = datap.slice(2,datap.length-2)
    let listp = datax.split("','")
    listp = listp.map(l=>{
      l = parseFloat(l)
      return l;
    })
    setPersonality(listp)
    console.log(listp)
  },[])
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
                  { title: "INFJ", value: personality[0], color: "#FF0000" },
                  { title: "ENTP", value: personality[1], color: "#FF7300" },
                  { title: "INTP", value: personality[2], color: "#FFAF00" },
                  { title: "INTJ", value: personality[3], color: "#FFEC00" },
                  { title: "ENTJ", value: personality[4], color: "#D5F30B" },
                  { title: "ENFJ", value: personality[5], color: "#52D726" },
                  { title: "INFP", value: personality[6], color: "#1BAA2F" },
                  { title: "ENFP", value: personality[7], color: "#2DCB75" },
                  { title: "ISFP", value: personality[8], color: "#26D7AE" },
                  { title: "ISTP", value: personality[9], color: "#7CDDDD" },
                  { title: "ISFJ", value: personality[10], color: "#5FB7D4" },
                  { title: "ISTJ", value: personality[11], color: "#97D9FF" },
                  { title: "ESTP", value: personality[12], color: "#007ED6" },
                  { title: "ESFP", value: personality[13], color: "#8399EB" },
                  { title: "ESTJ", value: personality[14], color: "#8E6CEF" },
                  { title: "ESFJ", value: personality[15], color: "#9C46D0" },
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
          <ol>
          {jobs.map((job,index)=>{
            return<li style={{textAlign:"left"}} key={index}>{job}</li>
          })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default PerformanceDash;
