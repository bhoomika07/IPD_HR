import React from 'react';
import './jobcard.css';
import {Row,Col} from 'react-bootstrap';
function JobCard() {
  return (
    <div className="job_maindiv">
        <h1 className='job_title-text'>Data Analyst</h1>
            <h3 className='job_title2-text'>Drishti Works - Mumbai, Maharashtra</h3>
        <Row>
            <Col md={8}><div className='job_bluebar'><p className='job_bluebar_text'>₹13,152 - ₹20,000 a month • Remote • Internship</p></div></Col>
        </Row>
        <h2 className='job_desc_title'>Job Description:</h2>
        <p className='job_desc'>Work on image processing algorithm implementation required for Machine Learning & Computer Vision. Work on image classification, segmentation, and feature extraction.</p>
        <button type='button' className="job_apply_button">Apply Now</button>
    </div>
  )
}

export default JobCard