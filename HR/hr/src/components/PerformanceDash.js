import React, { useEffect, useState } from "react";
import "../styling/PerformanceDash.css";
import { PieChart } from "react-minimal-pie-chart";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";

function PerformanceDash() {
  const [jobs,setJobs] = useState([])
  const [personality,setPersonality] = useState([])
  const location = useLocation();
      const[personality2, setPersonality2] = useState([])
  useEffect(()=>{
    let datax = location.state.suggested_jobs
    datax = datax.slice(2,datax.length-2)
    let listt = datax.split("', '")
    setJobs(listt)
        let datax2 = location.state.top_five
        datax2 = datax2.slice(2,datax2.length-2)
        let listt2 = datax2.split("', '")
        // let listt2 = [datax2]
        setPersonality2(listt2)
    console.log(listt)
    console.log(listt2)
    let datap = location.state.cand_personality
    datax = datap.slice(2,datap.length-2)
    let listp = datax.split("', '")
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
          <div style = {{height : "100%"}} className="card perf ap">
            <div className="card-header">Aptitude Analysis</div>
            <div className="card-body">
              <p>{location.state.score}%</p>
            </div>
          </div>
        </div>
        <div className="col" >
          <div style = {{height : "100%"}}className="card perf">
            <div className="card-header">Personality Analysis</div>
            <div className="card-body pie">
              <PieChart radius = "50"
                data={[
                  { title: `ENFJ - ${personality[0]} `, value: personality[0], color: "#FF0000" },
                  { title: `ENFP - ${personality[1]} `, value: personality[1], color: "#FF7300" },
                  { title: `ENTJ - ${personality[2]} `, value: personality[2],color: "#FFAF00" },
                  { title: `ENTP - ${personality[3]} `,value: personality[3], color: "#FFEC00" },
                  { title: `ESFJ - ${personality[4]} `,value: personality[4], color: "#D5F30B" },
                  { title: `ESFP - ${personality[5]} `,value: personality[5], color: "#52D726" },
                  { title: `ESTJ - ${personality[6]} `,value: personality[6], color: "#1BAA2F" },
                  { title: `ESTP - ${personality[7]} `,value: personality[7], color: "#2DCB75" },
                  { title: `INFJ - ${personality[8]} `,value: personality[8], color: "#26D7AE" },
                  { title: `INFP - ${personality[9]} `,value: personality[9], color: "#7CDDDD" },
                  { title: `INTJ - ${personality[10]} `,value: personality[10], color: "#5FB7D4" },
                  { title: `INTP - ${personality[11]} `,value: personality[11], color: "#97D9FF" },
                  { title: `ISFJ - ${personality[12]} `,value: personality[12], color: "#007ED6" },
                  { title: `ISFP - ${personality[13]} `,value: personality[13], color: "#8399EB" },
                  { title: `ISTJ - ${personality[14]} `,value: personality[14], color: "#8E6CEF" },
                  { title: `ISTP - ${personality[15]} `,value: personality[15], color: "#9C46D0" },
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
          <div className="card perf">
            <div className="card-header">Top 5 Personalities</div>
            <div className="card-body">
              <ol>
              {personality2.map((job,index)=>{
                return(<div><br></br><li style={{textAlign:"left"}} key={index}>{job}</li></div>)
              })}
              </ol>
            </div>
          </div>
    </div>
  );
}

export default PerformanceDash;
