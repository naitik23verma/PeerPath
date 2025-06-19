import "./LoginForm.css";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LoginForm(){


    let [formdata, setformdata] = useState({name:"",
    email:"",
    password:"",
    field:"",
    bio:"",
    isAvailable:true,
    expertiseLevel:"",
    socialLinks:{
        github:"",
        linkedin:"",
        portfolioImage:""
    },
    profileImage:""});

    function updateFormdata(e){
        setformdata({...formdata, [e.target.name ]: e.target.value});
    }
    async function handleLogin(){
        if(formdata.email === "" || formdata.password === ""){
            alert("Please fill all the fields");
            return; 
        }
        
        try{
            
            const response =await fetch("http://localhost:8080/api/users/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:formdata.email,
                    password:formdata.password
                })
            });
            const data=await response.json();
            if (!response.ok){
                alert(data.message || "Login failed");
                return;
            }
            localStorage.setItem("user",JSON.stringify(data.user));
            alert("Login Successful");
            setformdata({email:"",password:""});

            window.location.href="/";
        }catch(error){
            alert("Server error , please try again later!")
        }
    }
    return(

        <div className="login-form">

            <div className="Left-part">
                <div>
                <h1>Helo,Welcome!</h1>
                <p>Don't have an account?</p>
                <button className="registerbtn">Register</button>
                </div>
               
            </div>

            <div className="Right-part">
                 <h1>Login</h1>
                 <div className="emailInput">
                    <input type="text" placeholder="email" id="email" name="email" value={formdata.email} onChange={updateFormdata} ></input>
                    <div id="usericondiv"><label htmlFor="email"  ><PersonIcon id="usericon" fontSize="large" ></PersonIcon></label></div>
                    
                 </div>
                 <div className="passwordInput">
                    <input type="password" placeholder="Password" id="Password" name="password"  value={formdata.password} onChange={updateFormdata}></input>
                    <div id="passicondiv"><label htmlFor="Password"><VisibilityOffIcon id="passicon"></VisibilityOffIcon></label></div>
                    
                 </div>

                  <p>Forgot Password?</p>
                  <button className="Loginbtn" onClick={handleLogin}>Login</button>
                  <p>or login with social platforms</p>

                  <ul className="socialaccount">
                    <a href="" class="SocialIcon" ><LinkedInIcon style={{ color: 'black',height:"50px",width:"50px",marginRight:"30px" }}></LinkedInIcon></a>
                    <a href="" class="SocialIcon" ><GitHubIcon style={{ color: 'black',height:"50px",width:"50px" }}></GitHubIcon></a>
                  </ul>
                 
                
            </div>
            
        </div>
    );
}