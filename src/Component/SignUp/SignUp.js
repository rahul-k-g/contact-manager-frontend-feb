import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dots from "../SignIn/dots";
const SignUp = () => {
    const [userDetails, setUserDetails] = useState({
                                                     email: "",
                                                     password: "",
                                                     confirmPassword: ""
                                                    })

    let [isRevealed, setIsReaveled] = useState(false)
    let [pwd, setpwd] = useState(false)

    const [error, setError] = useState({ email_Err: "", password_Err: "", confirmPassword: "" })


    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(userDetails)
        if (userDetails.email.indexOf("@") === -1) {
            // console.log(userDetails.email)
            setError((oldData) => ({ ...oldData, email_Err: "please enter valid email id" }))
        } else {
            setError((oldData) => ({ ...oldData, email_Err: "" }))
        }
        //password validation
        if ((userDetails.password.length < 6) || (userDetails.password.length > 16)) {
            // console.log(userDetails.password)
            setError((oldData) => ({ ...oldData, password_Err: "password should contain atleast 6 characteristics and atmax 16 characteristics" }))
        } else {
            setError((oldData) => ({ ...oldData, password_Err: "" }))
        }
        if (userDetails.password !== userDetails.confirmPassword) {
            setError((oldData) => ({ ...oldData, password_Err: "please check password and confirmPassword not matched" }))
        }
        else {
            setError((oldData) => ({ ...oldData, password_Err: "" }))
        }

   
     }

    return (
        <>
            <div className="mainDiv">
            <div className="ellipse1"></div>
                <div className="insideDiv1">
                    <div className="div1_dots">
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                        <div><Dots /></div>
                      
                    </div>
                    

                    <div className="div2">
                        <div className="div2Form">
                            <div className="logo" ><img src="../images/logo.png"/></div>
                            
                            <p className="para signUpPara">Create New account</p>
                            <form className="form" onSubmit={submitHandler}>
                                <input className="email" type="text" name="email" onChange={(event) => { setUserDetails({ ...userDetails, email: event.target.value }) }} placeholder="Email Id"></input>
                                <div className="eye-div">
                                <input className="password" type={isRevealed ? "text" : "password"} name="password" onChange={(event) => { setUserDetails({ ...userDetails, password: event.target.value }) }} placeholder="password"></input>
                                <img id="hide" src="../images/eye1.png" alt="eyecon" onClick={() => setIsReaveled(prevState => !prevState)} />
                                </div>
                                <div className="eye-div">
                                <input className="password confirmPassword" id="eyeCon" type={pwd ? "text" : "password"} name="confirmPassword" onChange={(event) => { setUserDetails({ ...userDetails, confirmPassword: event.target.value }) }} placeholder="confirmPassword"></input>
                                <img id="hidez" src="../images/eye1.png" alt="eyecon" onClick={() => setpwd(prevState => !prevState)} />
                                </div>
                                <input type="submit" className="signUp signUpRe" value="Sign Up" />
                            </form>
                            <p1 className="goto">if user is already registered  <Link className="SignInLink" to="/login">signIn</Link>  </p1>
                           <p className="errorMessage">{(error.email_Err) && (<h5>{error.email_Err}</h5>) || error.password_Err && <h5>{error.password_Err}</h5>}</p> 
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

export default SignUp