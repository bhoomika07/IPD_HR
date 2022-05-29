import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import "../styling/findCandidates.css";

function CreateTest() {
  const location = useLocation();
  const navigate1 = useNavigate();
  const [quesArr, setQuesArr] = useState([]);
  const [tempQs, setTempQs] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOpt: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    setTempQs({ ...tempQs, [name]: value });
  };
  function addQs(e) {
    e.preventDefault();
    setQuesArr([
      ...quesArr,
      {
        question: tempQs.question,
        option1: {
          title: tempQs.option1,
          marks: parseInt(tempQs.correctOpt) === 1 ? 2 : 0,
        },
        option2: {
          title: tempQs.option2,
          marks: parseInt(tempQs.correctOpt) === 2 ? 2 : 0,
        },
        option3: {
          title: tempQs.option3,
          marks: parseInt(tempQs.correctOpt) === 3 ? 2 : 0,
        },
        option4: {
          title: tempQs.option4,
          marks: parseInt(tempQs.correctOpt) === 4 ? 2 : 0,
        },
      },
    ]);
    setTempQs({
      question: "",
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      correctOpt: "",
    });
  }
  return (
    <div className="container can">
      <h4 className="wel">
        Create your <b> personalised test!</b>
      </h4>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addQs(e);
        }}
      >
        <div className="card">
          <div className="card-header">
            {" "}
            <input
              type="text"
              name="question"
              onChange={handleInput}
              value={tempQs.question}
              className="form-control"
              id="ques"
              required
              placeholder="Enter your question"
            />
          </div>
          <div className="card-body">
            <input
              type="text"
              name="option1"
              onChange={handleInput}
              value={tempQs.option1}
              className="form-control"
              required
              id="op1"
              placeholder="Enter option 1"
            />
            <input
              type="text"
              name="option2"
              onChange={handleInput}
              value={tempQs.option2}
              className="form-control"
              required
              id="option2"
              placeholder="Enter option 2"
            />
            <input
              type="text"
              name="option3"
              onChange={handleInput}
              value={tempQs.option3}
              className="form-control"
              required
              id="option3"
              placeholder="Enter option 3"
            />
            <input
              type="text"
              name="option4"
              onChange={handleInput}
              value={tempQs.option4}
              required
              className="form-control"
              id="option4"
              placeholder="Enter option 4"
            />
            <input
              type="number"
              min={"1"}
              max="4"
              name="correctOpt"
              onChange={handleInput}
              value={tempQs.correctOpt}
              required
              className="form-control"
              id="correctOpt"
              placeholder="Enter correct option "
            />
          </div>
          <input
            type="submit"
            className="btn btn-lg b"
            value="+ Add Question"
          />
        </div>
      </form>
      <h4>
        <b>Added questions:</b>
      </h4>
      <p>
        {quesArr.length !== 0 &&
          quesArr.map((obj) => {
            return <p>{obj.question}</p>;
          })}
        {quesArr.length === 0 && <p>No questions added</p>}

        {/* <span className='row'>
            <span className='col'>
            <input className="btn btn-block btn-lg btn-primary"type="button" value="Edit"/>
            </span>
            <span className='col'>
            <input className="btn btn-block btn-lg btn-danger"type="button" value="Delete"/>
            </span>
          </span> */}
      </p>
      <input
        type="button"
        onClick={(e) => {
          e.preventDefault();

          axios
            .post("http://127.0.0.1:8000/comp/test/", {
              data: {
                jobid: location.state.jobid,
                instructions: "Please do not cheat",
                jsonData: quesArr,
              },
            })
            .then((res) => {
              if (res.data.status_code === 0) {
                navigate1("/confirmation");
              } else {
                alert(res.data.status_msg);
              }
            })
            .catch((e) => {
              console.log(e);
            });
        }}
        className="btn btn-lg b"
        value="Next"
      />
    </div>
  );
}

export default CreateTest;
