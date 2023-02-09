import { Link } from "react-router-dom";
import "./SignIn.css"
import React from "react";
import { useState } from 'react'
import Dots from "../SignIn/dots";



const SignIn = () => {
    const [loader, setLoader] = useState(false)
    let [isRevealed, setIsReaveled] = useState(false)
    let [userNotReg, setUserNotReg] = useState({
        wrongPassword: "",
        newUser: ""
    })
    const [error, setError] = useState({ email_Err: "", password_Err: "" })
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

   
    const submitHandler = (e) => {
        e.preventDefault();

        // email varification
        if (userDetails.email.indexOf("@") === -1) {
            console.log(userDetails.email)
            setError((oldData) => ({ ...oldData, email_Err: "please enter proper email" }))
        } else {
            setError((oldData) => ({ ...oldData, email_Err: "" }))
        }
        //password error
        if (userDetails.password.length < 6 || userDetails.password.length > 16) {
            console.log(userDetails.password)
            setError((oldData) => ({ ...oldData, password_Err: "password should contain atleast 6 characteristics and atmax 16 characteristics" }))
        } else {
            setError((oldData) => ({ ...oldData, password_Err: "" }))
        }
        // console.log(error)

    }
    // 
    return (
        <>
            <div className="mainDiv">
                <div className="ellipse1" >
                </div>

                <div className="insideDiv1">
                  
                <div className="div1_dots">
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                    </div>
                    
                    <div className="div2">
                        <div className="div2Form">
                            <div className="logo" ><img src="../images/logo.png"/></div>
                            
                            <p className="para">Enter your credentials to access your account</p>
                            <form className="form" method="POST" onSubmit={submitHandler}>
                                <input className="email" type="text" name="email" onChange={(event) => { setUserDetails({ ...userDetails, email: event.target.value }) }} placeholder="Email Id"></input>
                                <div className="eye-div">
                                <input className="password" type={isRevealed ? "text" : "password"} name="password" onChange={(event) => { setUserDetails({ ...userDetails, password: event.target.value }) }} placeholder="Password"></input>
                                <img id="hide" src="../images/eye1.png" alt="eyecon" onClick={() => setIsReaveled(prevState => !prevState)} />
                                </div>
                                <br></br>
                                <input type="submit" className="signIn" value="Sign In" /><br />
                            </form>
                        
                            <Link to="/register"><button className="signUp">Sign Up</button></Link>
                            {loader && <div className="loader-div"><img src="./images/Loading_icon.gif" alt="Loading_icon" /></div>}

                            <center className="errorMessage ">
                                {error.email_Err && <h5>{error.email_Err}</h5> || error.password_Err && <h5>{error.password_Err}</h5> || <h5>{userNotReg.wrongPassword}</h5> || <h5>{userNotReg.newUser}</h5>}
                            </center>
                        </div>
                    </div>
                 
                     <div className="div3 ">
                            <div><Dots /></div>
                            <div><Dots /></div>
                            <div><Dots /></div>
                            <div><Dots /></div>
                            <div><Dots /></div>
                    </div>


                </div>
                <div className="ellipse2">
                </div>

            </div>

        </>
    )
}

export default SignIn;