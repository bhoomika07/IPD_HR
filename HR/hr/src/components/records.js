import React from "react";
import "../styling/records.css";

function Records() {
  return (
    <div className="container container1">
      <h4>
        Hello, <b>ABC Co. Ltd!</b>
      </h4>
      <div className="card">
        <p>Jobs Posted</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Branch Details</th>
              <th scope="col">Applications Received</th>
              <th scope="col">Job Role Posted</th>
              <th scope="col">Date</th>
              <th scope="col">Application Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>Mumbai</b>
                <br />
                Posted 1 day ago
              </td>
              <a href="/applications"><td>View Applications</td></a>
              <td>Data Analyst</td>
              <td>
                <b>May 26, 2021</b>
                <br />
                6:30pm
              </td>
              <td>
                <button className="btn btn-success form-control btn-block">
                  POSTED
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <b>Pune</b>
                <br />
                Posted 2 days ago
              </td>
              <a href="/applications"><td>View Applications</td></a>
              <td>Data Scientist</td>
              <td>
                <b>May 26, 2021</b>
                <br />
                7:30pm
              </td>
              <td>
                <button className="btn btn-warning form-control btn-block">
                  DRAFT
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Records;
