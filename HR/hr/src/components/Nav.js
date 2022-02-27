import React from 'react'


import '../CSS/Nav.css'
const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" ><b>Job</b>Solutions</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" >Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" >Find Jobs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" tabindex="-1" >Find Candidates</a>
            </li>
          </ul>
          <form class="d-flex">
            <button class="btn" type="submit">Register Now</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav