import React, { useState } from "react";
import "./../style.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import RedirectButton from "../../../components/RedirectButton";
import FormContainer from "../../../components/FormContainer";

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
        <FormContainer
            title="Sign up your account"
            backgroundImage={"https://images.unsplash.com/photo-1623410439349-c8b831666e8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"}
        >
            <div onSubmit={onClickSignupButton}>
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
                <p style={{color: "gray", fontSize: 16}}>*password requires minimum of 6 characters</p>
                <p className="mt-5" style={{fontSize: 16}}>
                    Already have an account? <Link to="/login">Login</Link>
                </p> 
                <RedirectButton buttonLabel="SIGNUP" buttonLink="/todo"/>
            </div>
            <RedirectButton className="mt-3" buttonLabel="GO BACK HOME" buttonLink="/"/>
        </FormContainer>
    );
};
 
export default Register;