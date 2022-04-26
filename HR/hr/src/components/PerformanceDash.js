import React from 'react'
import '../styling/PerformanceDash.css'

function PerformanceDash() {
  return (
    <div className='container'>
        <h4>Performance Analysis</h4>
        <div className='card perf'>
           <div className='card-header'>
               Aptitude Analysis
           </div>
           <div className='card-body'>
               14/20
           </div>
        </div>
    </div>
  )
}

export default PerformanceDash