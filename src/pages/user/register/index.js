import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import "./style.css";

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
        <div>
            <div>
                <h1>Sign up your account</h1>
                <form onSubmit= {onClickSignupButton}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="username"
                        name="username"
                        value= {signupData.username}
                        onChange= {onFormInputChange}
                    />
                    <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                        value= {signupData.email}
                        name="email"
                        onChange= {onFormInputChange}
                    />
                    <input
                        type="password"
                        className="form-control"
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
                    <div>
                        <span>
                            Already have an account? <Link to="/login">Login</Link>
                        </span> 
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-outline-primary shadow mr-2"
                        >
                        Sign up
                        </button>
                    </div>
                    <button>
                        <Link to="/">GO BACK HOME</Link>                  
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default Register;