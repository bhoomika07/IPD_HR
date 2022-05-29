import React from 'react';
import './Home.css';
import {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate();
  return (
    <div>
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center">
                            <h1 class="mb-5 title">Find <b>Your Job</b> or <b>Next Potential Employee</b> with us</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="text-center">
            <div>
                <div class="row">
                    <div class="col">
                    <input onClick={()=>navigate('/Login')} type="button" className='btn btn-primary btn-block btn-lg' value="Post a job"/>
                    </div>
                    <div class="col">
                    <input onClick={()=>navigate('/Login')} type="button" className=' btn-primary btn-block btn btn-lg' value="Find a job"/>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home