import React from 'react'
import '../styling/findCandidates.css'

function CreateTest() {
  return (
    <div className='container'>
        <h4>Create your <b> personalised test!</b></h4>
        <form>
        <div className='card'>
            <div className='card-header'> <input type="text" name="ques" 
            className="form-control" id="ques" placeholder="Enter your question"/></div>
            <div className='card-body'>
            <input type="text" name="op1" 
            className="form-control" id="op1" placeholder="Enter option 1"/>
                        <input type="text" name="op2" 
            className="form-control" id="op2" placeholder="Enter option 2"/>
                        <input type="text" name="op3" 
            className="form-control" id="op3" placeholder="Enter option 3"/>
                        <input type="text" name="op4" 
            className="form-control" id="op4" placeholder="Enter option 4"/>
                        <input type="text" name="opr" 
            className="form-control" id="opr" placeholder="Enter correct option "/>
            </div>
            <input type="button" className="btn btn-lg" value="+ Add Question"/>
        </div>
        </form>
        <h4><b>Added questions:</b></h4>
        <p>What is the average of first multiples of five?</p>
        <input type="button" className="btn btn-lg" value="Next"/>
    </div>
  )
}

export default CreateTest