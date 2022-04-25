import React from 'react'
import {JobCard} from '../../components';
import {Row,Col} from "react-bootstrap";
import Vector from './Vector.svg';
import './homescreen.css'

function HomeScreen() {
  return (
    <div>
        <div style={{padding:"0px 0 0 70px"}}>
            <div style={{padding:"0 50px 0 0"}} className='d-flex justify-content-around'>
            <input className='search_job' type="text" placeholder="   💼 Search Jobs" aria-label="Search"/>
        <input className='search_loc' type="text" placeholder="   📍 Find location" aria-label="Search" />
        <div><img style={{paddingRight:"20px"}}  src={Vector} alt="filter"/>
        <button className='find_btn'>Find Job</button></div>
            </div>
      <Row>
        <Col style={{padding:" 0 30px"}} ls={6}><JobCard/></Col>
        <Col style={{padding:" 0 30px"}} ls={5} ><JobCard/></Col>
        <Col style={{padding:" 0 30px"}} ls={6}><JobCard/></Col>
        <Col style={{padding:" 0 30px"}} ls={5}><JobCard/></Col>
      </Row>
      </div>
    </div>
  )
}

export default HomeScreen