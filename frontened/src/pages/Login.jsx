import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/login.css";
import { useAuth } from "../store/auth";

// const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
    const [user,setUser] = useState({
    email: "",
    password: "",
    phone: "",
    password: "",
});


 const {storetokenInLS} = useAuth();

const navigate = useNavigate();

const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]:value,
    });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(user);
  
  try {
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });


    // console.log("login form", response);

    if(response.ok) {
      alert("Login Successful");
      const res_data = await response.json();
      console.log(res_data);
        storetokenInLS(res_data.token);
      //localStorage.setItem("token", res_data.token);

      setUser({ email: "", password: "" });

      navigate("/");
      
    } else {
      alert("Inavalid credential");
      console.log("Invalid Credential");
    }
    console.log("login form", response);
  } catch (error) {
    console.log(error);
  }
//   console.log(user)
};




    return <>
        <div>

      <div className="login">

      <div className="login-form">

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

            <div>
              
              <input type='email'
              name='email' 
              placeholder='enter your email' 
              id='email' 
              required
              autoComplete='off'
              value={user.email} 
              onChange={handleInput}/>

              <input type='password'
              name='password' 
              placeholder='enter your password' 
              id='password' 
              required
              autoComplete='off'
              value={user.password} 
              onChange={handleInput}/>


              <button type='submit'>Login</button>
              
              
              </div> 


          </form>

      </div>
      </div>
</div>
</>

};

