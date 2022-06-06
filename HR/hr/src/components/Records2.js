import React, { useEffect, useState } from "react";
import "../styling/records.css";
import axios from "axios";
import { useNavigate } from "react-router";

function Records2() {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/cand/getPostings/${
          JSON.parse(localStorage.getItem("uData"))["cand_email"]
        }/`
      )
      .then((res) => {
        console.log(res)
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, []);

  return (
    <div className="container container1">
      <h4>
        Hello, <b>{JSON.parse(localStorage.getItem("uData"))["cand_name"]}</b>
      </h4>
      <div className="card">
        <p>Jobs Posted</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col">Performance Analysis</th>
              <th scope="col">Job Role Posted</th>
              <th scope="col">Date</th>
              <th scope="col">Application Status</th>
            </tr>
          </thead>
          <tbody>
            {Data.length !== 0 &&
              Data.map((data) => {
                return (
                  <tr>
                    <td>
                      <b>{data.comp_name}</b>
                      <br />
                      {/* {data.job_date} */}
                    </td>

                    <td
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={(e) => {
                        navigate("/performance", {
                          state: {
                            score: data.score,
                            comp_name: data.comp_name,
                            cand_personality : data.cand_personality,
                            suggested_jobs : data.suggested_role,
                                top_five : data.topfive_personality
                          },
                        });
                      }}
                    >
                      View Result
                    </td>

                    <td>{data.job_role}</td>
                    <td>
                      <b>{data.job_date}</b>
                      <br />
                      {/* 6:30pm */}
                    </td>
                    <td>
                      <button
                        className={
                          !data.pending
                            ? "btn btn-warning form-control btn-block"
                            : data.if_selected
                            ? "btn btn-success form-control btn-block"
                            : "btn btn-danger form-control btn-block"
                        }
                        disabled
                      >
                        {!data.pending
                          ? "Pending"
                          : data.if_selected
                          ? "Accepted"
                          : "Rejected"}
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records2;
