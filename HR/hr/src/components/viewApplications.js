import React from "react";
import "../styling/records.css";
function ViewApplications() {
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
              <th scope="col">Candidate Details</th>
              <th scope="col">View Stats</th>
              <th scope="col">Job Role Posted</th>
              <th scope="col">Date</th>
              <th scope="col">Application Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <b>John Doe</b>
              </td>
              <a href="/performance"><td>View Dashboard</td></a>
              <td>Data Analyst</td>
              <td>
                <b>May 26, 2021</b>
                <br />
                6:30pm
              </td>
              <td className="row">
                  <div className="col">
                  <button className="btn btn-success form-control btn-block">
                  ACCEPT
                </button>
                  </div>
                  <div className="col">
                <button className="btn btn-danger form-control btn-block">
                  REJECT
                </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewApplications;
