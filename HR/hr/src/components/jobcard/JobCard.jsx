import React from 'react';
import './jobcard.css';
import {Row,Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'

function JobCard({job}) {
  const navigate = useNavigate();
  function clickHandler(id){
    navigate('/details',{state:{data:job}})
  }

  return (
    <div className="job_maindiv">
      {job!==undefined && <>
        <h1 className='job_title-text'>{job.jobdomain}</h1>
            <h3 className='job_title2-text'>{job.name} - {job.location}</h3>
        <Row>
            <Col md={8}><div className='job_bluebar'><p className='job_bluebar_text'>₹{job.minsalary} - ₹{job.maxsalary} a month • Remote • Internship</p></div></Col>
        </Row>
        <h2 className='job_desc_title'>Job Description:</h2>
        <p className='job_desc'>{job.description}</p>
        <button type='button' onClick={()=>clickHandler(job.jobid)} className="job_apply_button">Apply Now</button>
      </>}
    </div>
  )
}

export default JobCard