import React, { useState,useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import './details.css'
import {useLocation,useNavigate} from 'react-router-dom'

function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const [data,setData] = useState({})
useEffect(() => {
  setData(location.state.data);
}, [])

function starttest(){
  navigate('/aptitudeTest',{state:{id:data.testid}})
}

  return (
    <div className='detail_div' style={{margin:'auto',width:"80%",minHeight:"650px",padding:"20px 0"}}>
         <h1 className='job_title-text'>{data.jobdomain}</h1>
            <h3 className='job_title2-text'>{data.name} - {data.location}</h3>
        <Row>
            <Col md={8}><div className='job_bluebar'><p className='job_bluebar_text'>₹{data.minsalary} - ₹{data.maxsalary} a month • Remote • Internship</p></div></Col>
        </Row>
        <h2 className='job_desc_title'>Job Description:</h2>
        <p className='job_desc'>{data.description}</p>
        <h1 style={{marginTop:"30px"}} className='job_title-text'>Instructions:</h1>
        <ol>
            <li>You will have 30 minutes to complete this test. Make sure to submit the test in the given time. </li>
            <li> All the questions in the test are compulsory. </li>
            <li>Each question carries 2 marks.</li>
            <li>The questions will be based on your technical skills and general aptitude.</li>
        </ol>
        <div style={{marginTop:"100px"}} className='d-flex justify-content-center'>
            <button onClick={starttest} className='start_btn'>Start Test</button>
        </div>
    </div>
  )
}

export default Details