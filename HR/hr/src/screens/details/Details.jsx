import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './details.css'

function Details() {
  return (
    <div className='detail_div' style={{margin:'auto',width:"80%",minHeight:"650px",padding:"20px 0"}}>
         <h1 className='job_title-text'>Data Analyst</h1>
            <h3 className='job_title2-text'>Drishti Works - Mumbai, Maharashtra</h3>
        <Row>
            <Col md={8}><div className='job_bluebar'><p className='job_bluebar_text'>₹13,152 - ₹20,000 a month • Remote • Internship</p></div></Col>
        </Row>
        <h2 className='job_desc_title'>Job Description:</h2>
        <p className='job_desc'>Work on image processing algorithm implementation required for Machine Learning & Computer Vision. Work on image classification, segmentation, and feature extraction.</p>
        <h1 style={{marginTop:"30px"}} className='job_title-text'>Instructions:</h1>
        <ol>
            <li>You will have 30 minutes to complete this test. Make sure to submit the test in the given time. </li>
            <li> All the questions in the test are compulsory. </li>
            <li>Each question carries 2 marks.</li>
            <li>The questions will be based on your technical skills and general aptitude.</li>
        </ol>
        <div style={{marginTop:"100px"}} className='d-flex justify-content-center'>
            <button className='start_btn'>Start Test</button>
        </div>
    </div>
  )
}

export default Details