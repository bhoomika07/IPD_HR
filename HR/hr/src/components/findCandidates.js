import React from 'react'
import '../styling/findCandidates.css'
function FindCandidates() {
    
  return (
    <div className='container'>
        <h4>Welcome, <b>ABC Co. Ltd.</b> Create a job posting now!</h4>
        <form>
        <div className='card'>
            <div className='card-header'>Enter job title for the open position.</div>
            <div className='card-body'>
            <input type="text" name="jobpos"
            className="form-control" id="jobpos" placeholder="eg: Data Analyst"/>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Enter location.</div>
            <div className='card-body'>
            <input type="text" name="jobloc" 
            className="form-control" id="jobloc" placeholder="eg: Mumbai, Maharashtra"/>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Enter job description.</div>
            <div className='card-body'>
            <input type="textarea" name="jobdesc" 
            className="form-control" id="jobdesc" placeholder="eg: job: beginner level, need to know python3 and relevant python libraries, etc"/>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Enter pay range.</div>
            <div className='card-body'>
            <input type="text" name="payrange" 
            className="form-control" id="payrange" placeholder="eg: 15000"/>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Select job type.</div>
            <div className='card-body'>
            <label>
                Job Role
            <select>
                <option value="Data Analyst">Data Analyst</option>
                <option value="App Developer">App Developer</option>
                <option value="Web Developer">Web Developer</option>
            </select>
            </label>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Ask for LinkedIn.</div>
            <div className='card-body'>
            <div class="custom-control custom-radio">
                <input type="radio" id="yes" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio1" > YES </label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="no" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio2"> NO </label>
            </div>
        </div>
        </div>
        <div className='card'>
            <div className='card-header'>Ask for Candidate CV.</div>
            <div className='card-body'>
            <div class="custom-control custom-radio">
                <input type="radio" id="yes" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio1" > YES </label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="no" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio2"> NO </label>
            </div>
        </div>
        </div>
        <div className='card'>
            <div className='card-header'>Create an evaluation test?</div>
            <div className='card-body'>
            <div class="custom-control custom-radio">
                <input type="radio" id="yes" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio1" > YES </label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="no" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio2"> NO </label>
            </div>
        </div>
        </div>
        </form>
        <input type="button" className="btn btn-lg" value="Next"/>
    </div>
  )
}

export default FindCandidates