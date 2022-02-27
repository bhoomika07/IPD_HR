import React from 'react'
import '../CSS/tagline.css'
import job from '../img/job.svg'

const Tagline = () => {
  return (
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Find <b>Your Job</b> or <b>Next Potential Employee</b> with us</h1>
      <p class="lead">950+ jobs and 100+ candidates are on board!</p>
    </div>
    <div class="container">
        <h4>How may we help you today?</h4>
        <button class="btn" type="submit">Find a job</button>
        <button class="btn" type="submit">Post a job</button>
        {/* <img src={job} class="rounded float-end" alt=""/> */}
    </div>
    <div class="custom-shape-divider-bottom-1645956565">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    </div>
  </div>
  )
}

export default Tagline