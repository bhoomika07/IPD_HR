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
            className="form-control" id="jobdec" placeholder="eg: job: beginner level, need to know python3 and relevant python libraries, etc"/>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Select pay range.</div>
            <div className='card-body'>
            <select value="Select Pay">
                <option value="Below 15k">Below 15k</option>
                <option value="15-50k">15-50k</option>
                <option value="Above 50k">Above 50k</option>
            </select>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Select job type.</div>
            <div className='card-body'>
            <select value="Select Pay">
                <option value="Below 15k">Data Analyst</option>
                <option value="15-50k">App Developer</option>
                <option value="Above 50k">Web Developer</option>
            </select>
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