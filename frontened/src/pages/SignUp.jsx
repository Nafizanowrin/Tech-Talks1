import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../components/signup.css";
import { useAuth } from '../store/auth';


export const SignUp = () => {
const [user,setUser] = useState({

    username:"",
    email:"",
    phone:"",
    password:""

});

 const {storetokenInLS} = useAuth();


const  navigate = useNavigate();

const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value 
    })
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user);
  try {
    const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if(response.ok) {
        const res_data = await response.json();
        console.log("Response from server", res_data);
        storetokenInLS(res_data.token);
        //localStorage.setItem("token", res_data);
        setUser({ username: "", email: "", phone: "", password: "" }); 
        navigate("/login");
      }
      console.log(response);
  } catch (error) {
    console.log("register", error);
  }


};


    return <>
    
     <div>

     <div className="reg">

          <div className="reg-form">

              <h2>Sign Up</h2>

              <form onSubmit={handleSubmit}>

                <div>
                  
                   <input type='text'
                   name='username' 
                   placeholder='enter your username' 
                   id='username' 
                   required
                   autoComplete='off'
                   value={user.username} 
                   onChange={handleInput}/>

                  <input type='email'
                   name='email' 
                   placeholder='enter your email' 
                   id='email' 
                   required
                   autoComplete='off'
                   value={user.email} 
                   onChange={handleInput}/>

                  <input type='number'
                   name='phone' 
                   placeholder='enter your phone no' 
                   id='phon' 
                   required
                   autoComplete='off'
                   value={user.phone} 
                   onChange={handleInput}/>

                  <input type='password'
                   name='password' 
                   placeholder='enter your password' 
                   id='password' 
                   required
                   autoComplete='off'
                   value={user.password} 
                   onChange={handleInput}/>


                   <button type='submit'>Register Now</button>
                  
                  
                  </div> 


              </form>

          </div>



      </div>

    </div>
    </>;
};




