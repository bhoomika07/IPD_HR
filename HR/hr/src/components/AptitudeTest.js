import React from 'react'
import '../styling/AptitudeTest.css'
function AptitudeTest() {
  return (
    <div className='container'>
      <h4>J.P Stan and Co. - Data Analyst</h4>
      <form>
        <div className='card'>
            <div className='card-header'>Which of the following is not a multiple of 5?</div>
            <div className='card-body'>
            <div class="custom-control custom-radio">
                <input type="radio" id="op1" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio1" > 15 </label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="op2" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio2"> 100 </label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="op3" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio3" > 1200 </label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="op4" name="customRadio" class="custom-control-input"/>
                <label className="custom-control-label" htmlFor="customRadio4"> 71 </label>
            </div>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Upload your CV.</div>
            <div className='card-body'>
              <input type="file"/>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Add your Linkedin.</div>
            <div className='card-body'>
            <input type="text" name="op" 
            className="form-control" id="op" placeholder="https://www.linkedin.com/in/bhoomika-valani-695b22199/"/>
            </div>
        </div>
        <input type="button" className="btn btn-lg" value="Submit"/>
        </form>
    </div>
  )
}

export default AptitudeTest