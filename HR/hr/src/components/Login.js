import React, {useState} from "react";
import Loginimg from '../img/login.png';
import "../styling/register.css"
const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  });

  const handleInput = (e) =>{
    const name= e.target.name;
    const value = e.target.value;
    setUser({...user, [name]:value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const newUser = {...user, id: new Date().getTime().toString()}
    console.log(newUser);
  }

  return (
    <>
       <h4>Welcome back <i>Job</i>Solutions</h4>
      <img src={Loginimg} alt="login"/>
    <form action="" onSubmit={handleSubmit}>
    <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Email Address</label>
   <input type="email" name="email" value={user.email} onChange={handleInput}
   class="form-control" id="email" placeholder="johndoe@gmail.com"/>
   </div>
   <div class="mb-3">
   <label for="exampleFormControlInput1" class="form-label">Password</label>
   <input type="password" name="password" value={user.password} onChange={handleInput}
   class="form-control" id="password"/>
   </div>
   <span>Forgot your password?</span>
   <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  I am a recruiter. I am here to register my company.
  </label>
  </div>
   <input type="button" className="btn btn-lg" value="Register Now"/>
   <p>Don't have an account? <b><i>Register</i></b></p>
    </form>
    </>
  );
};

export default Login;