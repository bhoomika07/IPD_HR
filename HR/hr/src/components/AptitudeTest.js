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
  const [filenametemp, setfilenametemp] = useState('')
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    setfilenametemp(file.name)
    const base64 = await convertBase64(file);
    setSelectedFile(base64);
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
  
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
  
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const onFileChange = (event) => {
    uploadImage(event);
  };
  const onlinkedinChange = (event) =>{
    setLkdn(event.target.value)
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
    };
    let formData1 = new FormData();
    // formData1.append("Content-Type","multipart/form-data")
    formData1.append(
      "cid",
      JSON.parse(localStorage.getItem("uData"))["cand_email"]
    );
    formData1.append("testid", location.state.id);
    formData1.append("linkedin", lkdn);
    formData1.append("score", Math.ceil((c * 100) / total));
    console.log(selectedFile)
    //formData1.append("cv", selectedFile);
    formData1.append("compid", location.state.compid);
    let objtemp = {}
    // objtemp.name = selectedFile.name;
    // objtemp.size = selectedFile.size;
    // objtemp.type = selectedFile.type;
    // objtemp.webkitRelativePat= selectedFile.webkitRelativePath;
    // let objt = {'file':objtemp}

    var object = {};
formData1.forEach(function(value, key){
    object[key] = value;
});
console.log(selectedFile)
//object['cv'] = selectedFile
//object['filename'] = filenametemp
// let idCardBase64 = '';
// this.getBase64(selectedFile, (result) => {
//      idCardBase64 = result;
// });
var json1 = JSON.stringify(object);
//json1 = json1.substring(0,json1.indexOf('}')+1);
 json1 = JSON.parse(json1);
 json1['cv']=selectedFile
 json1['filename'] = filenametemp
 console.log(json1)
// json1.cv = selectedFile
// var temp1 = Object.keys(json1)
// // json1['cv'] = selectedFile;
// console.log(json1)
// var x =0;
//console.log(formData.entries())
// const config = {
//   headers: {
//     'content-type': 'form-data'
//   }
// }
    axios
      .post("http://localhost:8000/cand/response/",json1)
      .then((res) => {
        navigate("/records2");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="container">
      <h4 className="tit">{location.state.jobname}-{location.state.jobdomain} </h4>
      <Timer hours="0" minutes="60" />
      <form onSubmit={submitHandler} >
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
                <label htmlFor={q.question}> {q.option1.title} </label>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  id={"option2"}
                  name={q.question}
                  value={q.option2.marks}
                />
                <label htmlFor={q.question}> {q.option2.title} </label>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  id={"option3"}
                  name={q.question}
                  value={q.option3.marks}
                />
                <label htmlFor={q.question}> {q.option3.title} </label>
              </div>
              <div className="card-body">
                <input
                  type="radio"
                  id={"option4"}
                  name={q.question}
                  value={q.option4.marks}
                />
                <label htmlFor={q.question}> {q.option4.title} </label>
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
          <div className="card-header">Add your Twitter {lkdn}</div>
          <div className="card-body">
            <input
              type="text"
              name="op"
              className="form-control"
              id="op"
              value = {lkdn}
              onChange={onlinkedinChange}
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