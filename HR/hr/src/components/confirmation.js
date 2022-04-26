import React from 'react'
import '../styling/confirmation.css'
function Confirmation() {
  return (
    <div className='container'>
        <form>
            <div className='card conf'>
            <h4 className="lead">Your job opening is ready to be posted. Are you sure you want to make it public?</h4>
            <hr className="my-4"/>
                <div class="row">
                    <div class="col">
                        <button className="btn btn-success form-control btn-block">YES</button></div>
                    <div class="col">
                    <button className="btn btn-danger form-control  btn-block">NO</button></div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Confirmation