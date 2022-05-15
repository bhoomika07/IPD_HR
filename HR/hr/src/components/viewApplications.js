import React, { useEffect, useState } from "react";
import "../styling/records.css";
import axios from "axios";
import { useNavigate } from "react-router";
function ViewApplications() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/comp/getUserResponse/${
          JSON.parse(localStorage.getItem("uData"))["compid"]
        }`
      )
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {};
  }, []);
  function acceptReject(flag, id) {
    axios
      .post(`http://localhost:8000/cand/getUpdatePostings/${id}/`, {
        data: {
          flag: flag,
        },
      })
      .then((res) => {
        if (!res.data.status_code) {
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container container1">
      <h4>
        Hello, <b>{JSON.parse(localStorage.getItem("uData"))["name"]}</b>
      </h4>
      <div className="card">
        <p>Jobs Posted</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Candidate Details</th>
              <th scope="col">View Stats</th>
              <th scope="col">Job Role Posted</th>
              <th scope="col">Date</th>
              <th scope="col">Application Status</th>
            </tr>
          </thead>
          <tbody>
            {data.length !== 0 &&
              data.map((dt) => {
                return (
                  <tr>
                    <td>
                      <b>{dt.cand_name}</b>
                    </td>

                    <td
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={(e) => {
                        navigate("/performance", {
                          state: {
                            score: dt.score,
                            comp_name: dt.cand_name,
                          },
                        });
                      }}
                    >
                      View Dashboard
                    </td>

                    <td>{dt.job_role}</td>
                    <td>
                      <b>{dt.job_date}</b>
                      <br />
                      {/* 6:30pm */}
                    </td>
                    <td className="row">
                      {!dt.pending && (
                        <>
                          <div className="col">
                            <button
                              onClick={(e) => {
                                acceptReject(1, dt.id);
                              }}
                              className="btn btn-success form-control btn-block"
                            >
                              ACCEPT
                            </button>
                          </div>
                          <div className="col">
                            <button
                              onClick={(e) => {
                                acceptReject(0, dt.id);
                              }}
                              className="btn btn-danger form-control btn-block"
                            >
                              REJECT
                            </button>
                          </div>
                        </>
                      )}
                      {dt.pending && (
                        <>
                          <div className="col">
                            <button
                              disabled
                              className={
                                dt.if_selected
                                  ? "btn btn-success form-control btn-block"
                                  : "btn btn-danger form-control btn-block"
                              }
                            >
                              {dt.if_selected ? "ACCEPTED" : "REJECTED"}
                            </button>
                          </div>
                        </>
                      )}
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

export default ViewApplications;
