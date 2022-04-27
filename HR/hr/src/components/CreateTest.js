import React, { useState } from "react";
import "../styling/findCandidates.css";

function CreateTest() {
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
    setQuesArr([...quesArr, tempQs]);
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
      <form>
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
              id="op1"
              placeholder="Enter option 1"
            />
            <input
              type="text"
              name="option2"
              onChange={handleInput}
              value={tempQs.option2}
              className="form-control"
              id="option2"
              placeholder="Enter option 2"
            />
            <input
              type="text"
              name="option3"
              onChange={handleInput}
              value={tempQs.option3}
              className="form-control"
              id="option3"
              placeholder="Enter option 3"
            />
            <input
              type="text"
              name="option4"
              onChange={handleInput}
              value={tempQs.option4}
              className="form-control"
              id="option4"
              placeholder="Enter option 4"
            />
            <input
              type="text"
              name="correctOpt"
              onChange={handleInput}
              value={tempQs.correctOpt}
              className="form-control"
              id="correctOpt"
              placeholder="Enter correct option "
            />
          </div>
          <input
            type="button"
            onClick={(e) => {
              addQs(e);
            }}
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
        {quesArr.length == 0 && <p>No questions added</p>}

        {/* <span className='row'>
            <span className='col'>
            <input className="btn btn-block btn-lg btn-primary"type="button" value="Edit"/>
            </span>
            <span className='col'>
            <input className="btn btn-block btn-lg btn-danger"type="button" value="Delete"/>
            </span>
          </span> */}
      </p>
      <a href="/confirmation">
        <input type="button" className="btn btn-lg b" value="Next" />
      </a>
    </div>
  );
}

export default CreateTest;
