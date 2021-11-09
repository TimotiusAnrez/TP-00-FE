import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import "./../style.css"

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
        <div className="d-flex justify-content-center align-items-center backgroundAuth" style={{height: "100vh"}}>
            <div className="d-flex align-items-center row containerAuth" style={{height: "70vh", width: "70vw"}}>
                <form className="text-center px-5" onSubmit= {onClickLoginButton}>
                    <h1 className="fontSecondary" style={{fontSize: 80}}>Log in to your account</h1>
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
                    <div className="mt-5">
                        <span>
                            <Link to="/resetPassword">Forgotten your password</Link>?               
                            <br/>Don't have an account? <Link to="/register">Sign up</Link>
                        </span>
                        <br/>
                        <button className="buttonStyle mb-2 mt-1">
                            LOGIN
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
 
export default Login;