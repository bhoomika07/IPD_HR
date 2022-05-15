import React, { useEffect, useState } from "react";
import "../styling/AptitudeTest.css";
import Timer from "../components/Timer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function AptitudeTest() {
  const navigate = useNavigate();
  const [lkdn, setLkdn] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const location = useLocation();
  const [qs, setQs] = useState([]);
  const onFileChange = (event) => {
    // Update the state
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {
    const data = async () =>
      await axios
        .get(`http://127.0.0.1:8000/comp/test/${location.state.id}`)
        .then((res) => {
          setQs(res.data.jsonData);
        })
        .catch((e) => console.log(e));
    data();
  }, []);

  function submitHandler(e) {
    e.preventDefault();

    let c = 0,
      total = 0;
    var checkboxes = document.querySelectorAll("input[type=radio]:checked");

    for (var i = 0; i < checkboxes.length; i++) {
      c = c + parseInt(checkboxes[i].value);
      total = total + 2;
    }
    let formData = new FormData();
    formData.append(
      "cid",
      JSON.parse(localStorage.getItem("uData"))["cand_email"]
    );
    formData.append("testid", location.state.id);
    formData.append("linkedin", "asasdads");
    formData.append("score", Math.ceil(c / total) * 100);
    formData.append("cv", selectedFile);
    formData.append("compid", location.state.compid);
    axios
      .post("http://localhost:8000/cand/response/", formData)
      .then((res) => {
        navigate("/records2");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <h4 className="tit">J.P Stan and Co. - Data Analyst</h4>
      <Timer hours="0" minutes="60" />
      <form onSubmit={submitHandler}>
        {qs.map((q) => {
          return (
            <div className="c card">
              <div className="ch card-header">{q.question}</div>
              <div className="card-body">
                <input
                  type="radio"
                  id={"option1"}
                  name={q.question}
                  value={q.option1.marks}
                />
                <label htmlFor={"option1"}> {q.option1.title} </label>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  id={"option2"}
                  name={q.question}
                  value={q.option2.marks}
                />
                <label htmlFor={"option2"}> {q.option2.title} </label>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  id={"option3"}
                  name={q.question}
                  value={q.option3.marks}
                />
                <label htmlFor={"option3"}> {q.option3.title} </label>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  id={"option4"}
                  name={q.question}
                  value={q.option4.marks}
                />
                <label htmlFor={"option4"}> {q.option4.title} </label>
              </div>
            </div>
          );
        })}

        <div className="card">
          <div className="card-header">Upload your CV.</div>
          <div className="card-body">
            <input name="cv" type="file" onChange={onFileChange} />
          </div>
        </div>
        <div className="card">
          <div className="card-header">Add your Linkedin.</div>
          <div className="card-body">
            <input
              type="text"
              name="op"
              className="form-control"
              id="op"
              placeholder="https://www.linkedin.com/in/bhoomika-valani-695b22199/"
            />
          </div>
        </div>
        <input
          onClick={submitHandler}
          type="submit"
          value="Submit"
          className="btn btn-primary btn-lg btn-block"
        />
      </form>
    </div>
  );
}

export default AptitudeTest;
