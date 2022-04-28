import React ,{useEffect,useState}from 'react'
import '../styling/AptitudeTest.css'
import Timer from '../components/Timer'
import {useNavigate, useLocation} from 'react-router-dom'
import axios from 'axios'

function AptitudeTest() {
  const navigate = useNavigate();
  const[lkdn,setLkdn] = useState('')
const location = useLocation();
const [qs,setQs] = useState([]);

useEffect(() => {
  const data = async ()=>await axios.get(`http://127.0.0.1:8000/comp/test/${location.state.id}`)
  .then((res)=>{
    console.log(res.data)
    setQs(res.data.questions)
  })
  .catch(e=>console.log(e))
  data();
}, [])

function submitHandler(e){
e.preventDefault();
navigate('/records2');
}
  return (
    <div className='container'>
      <h4 className='tit'>J.P Stan and Co. - Data Analyst</h4>
      <Timer hours="0" minutes="60" />
      <form onSubmit={submitHandler}>
        {qs.map(q=>{
          return <div className='c card'>
          <div className='ch card-header'>{q.description}</div>
          <div className='card-body'>
            {q.options.map(opt=>{
              return <div>
              <input type="radio" id={opt.id} name={q.description} value={opt.correct}/>
              <label htmlFor={qs.description} > {opt.description} </label>
          </div>
            })}
          </div>
      </div>
        })}
        
        <div className='card'>
            <div className='card-header'>Upload your CV.</div>
            <div className='card-body'>
              <input name='cv' type="file"/>
            </div>
        </div>
        <div className='card'>
            <div className='card-header'>Add your Linkedin.</div>
            <div className='card-body'>
            <input type="text" name="op" 
            className="form-control" id="op" placeholder="https://www.linkedin.com/in/bhoomika-valani-695b22199/"/>
            </div>
        </div>
        <input onClick={submitHandler} type="button" value='Submit' className="btn btn-primary btn-lg btn-block"/>
        </form>
    </div>
  )
}

export default AptitudeTest