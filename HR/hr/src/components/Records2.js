import React from "react";
import "../styling/records.css";

function Records2() {
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
            <tr>
              <td>
                <b>ABC Co. Ltd.</b>
                <br />
                Posted 1 day ago
              </td>
              <a href="/performance">
                <td>View Result</td>
              </a>
              <td>Data Analyst</td>
              <td>
                <b>May 26, 2021</b>
                <br />
                6:30pm
              </td>
              <td>
                <button className="btn btn-success form-control btn-block">
                  Accepted
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <b>Google</b>
                <br />
                Posted 2 days ago
              </td>
              <a href="/performance">
                <td>View Result</td>
              </a>
              <td>Data Scientist</td>
              <td>
                <b>May 26, 2021</b>
                <br />
                7:30pm
              </td>
              <td>
                <button className="btn btn-warning form-control btn-block">
                  Pending
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records2;
