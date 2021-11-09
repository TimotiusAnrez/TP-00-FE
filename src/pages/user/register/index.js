import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import "./../style.css";

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { Auth } = useSelector((state) => {
        return {
            Auth: state.AuthReducer
        };
    });

    const [signupData, setSignupData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onFormInputChange = (e) => {
        setSignupData({...signupData, [e.target.name]: e.target.value});
    };

    const onClickSignupButton = async (e) => {
        e.preventDefault();
        const { username, email, password, confirmPassword } = signupData;

        if (password === confirmPassword){
            if(password.length >= 6){
                let dataBody = {
                    username,
                    email,
                    password,
                };

                try {
                    const response = await axios.post(`http://localhost:5000/auth/register`, dataBody);
                    console.log(response.data);
                    
                    localStorage.setItem("token-access", response.data.token);
                    dispatch({ type: "LOGIN", payload: response.data.data });

                    alert("Signup is successful");
                } catch (error) {
                    alert(error.response.data.message || "Server Error");
                }
            } else {
                alert("Password needs to be 6 or more character!");
            };

        } else {
            alert("Password and confirm password does not match!");
        };
    };

    if (Auth.isLogin) {
        return history.push('/todo');
    };

    return (
        <div className="d-flex justify-content-center align-items-center backgroundAuth" style={{height: "100vh"}}>
            <div className="d-flex align-items-center row containerAuth" style={{height: "70vh", width: "70vw"}}>
                <form className="text-center px-5" onSubmit= {onClickSignupButton}>
                    <h1 className="fontSecondary" style={{fontSize: 80}}>Sign up your account</h1>
                    <input
                        type="text"
                        className="form-control mb-1"
                        placeholder="username"
                        name="username"
                        value= {signupData.username}
                        onChange= {onFormInputChange}
                    />
                    <input
                        type="email"
                        className="form-control mb-1"
                        placeholder="email"
                        value= {signupData.email}
                        name="email"
                        onChange= {onFormInputChange}
                    />
                    <input
                        type="password"
                        className="form-control mb-1"
                        placeholder="password"
                        value= {signupData.password}
                        name="password"
                        onChange= {onFormInputChange}
                    />
                    <input
                        type="password"
                        className="form-control"
                        placeholder="confirm password"
                        name="confirmPassword"
                        value= {signupData.confirmPassword}
                        onChange= {onFormInputChange}
                    />
                    <div className="mt-5">
                        <span>
                            Already have an account? <Link to="/login">Login</Link>
                        </span> 
                        <br/>
                        <button className="buttonStyle mb-2 mt-1">
                            SIGNUP
                        </button>
                        <br/>
                        <button className="buttonStyle">
                            <Link className="buttonStyle" style={{textDecoration: "none"}} to="/">GO BACK HOME</Link>                  
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Register;