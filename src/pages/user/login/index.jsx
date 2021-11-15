import React, { useState } from "react";
import "./../style.css"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import ActionButton from "../../../components/ActionButton";
import FormContainer from "../../../components/FormContainer";

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { Auth } = useSelector((state) => {
        return {
            Auth: state.AuthReducer
        };
    });

    const [loginData, setLoginData] = useState({
        usernameOrEmail: "",
        password: "",
    });
    
    const onFormInputChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value });
    };
    
    const onClickLoginButton = async (e) => {
        e.preventDefault();
        const { usernameOrEmail, password } = loginData;

        let dataBody = {
            usernameOrEmail,
            password,
        };

        try {
            const response = await axios.get(`http://localhost:5000/auth/login`, dataBody);
            console.log(response.data);

            localStorage.setItem("token-access", response.data.token);
            dispatch({ type: "LOGIN", payload: response.data.data });

            alert("Login is successful");
        } catch (error) {
            alert(error.response.data.message || "Server Error");
        }
    };
    
    if (Auth.isLogin) {
        return history.push('/todo');
    };

    return (
        <FormContainer 
            title="Log in to your account"
            backgroundImage={"https://images.unsplash.com/photo-1623410439349-c8b831666e8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"}
        >
            <div onSubmit= {onClickLoginButton}>
                <input
                    type="text"
                    className="form-control mb-1"
                    placeholder="username or email"
                    name="usernameOrEmail"
                    value= {loginData.usernameOrEmail}
                    onChange= {onFormInputChange}
                />
                <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    name="password"
                    value= {loginData.password}
                    onChange= {onFormInputChange}
                />
                <p className="mb-1 mt-5" style={{fontSize: 16}}>
                    <Link to="/resetPassword">Forgotten your password</Link>?               
                    <br/>Don't have an account? <Link to="/register">Sign up</Link>
                </p>
                <ActionButton buttonLabel="LOGIN" buttonLink="/todo"/>
            </div>
            <ActionButton className="mt-3" buttonLabel="GO BACK HOME" buttonLink="/"/>    
        </FormContainer>
    );
};
 
export default Login;