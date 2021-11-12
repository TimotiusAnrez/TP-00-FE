import React, { useState } from 'react';
import "../style.css"
import axios from "axios";
import FormContainer from '../../../components/FormContainer';
import RedirectButton from '../../../components/RedirectButton';

const ResetPassword = () => {
    const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");

    const onFormInputChange = (e) => {
        setForgotPasswordEmail(e.target.value);
    };

    const onForgotPasswordSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:5000/auth/resetPassword`, { email: forgotPasswordEmail });
            console.log(res.data);
            alert(res.data.message);

        } catch (error) {
            alert(error.response.data.message || "Server Error");
        }

    };

    return (
        <FormContainer
            title="Did you forget your password?"
            backgroundImage={"https://images.unsplash.com/photo-1623410439349-c8b831666e8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"}
        >
            <div 
                action="/forgotPassword" 
                method="post"
                onSubmit={onForgotPasswordSubmit}
            >
                <p style={{fontSize: 20,  marginTop: -40, color: "gray"}}>We will send your an email to reset your password.</p>
                <input
                    onChange={onFormInputChange}
                    className="form-control mb-5" 
                    name="email"
                    placeholder="email"
                />
                <RedirectButton buttonLabel="SEND VERIFICATION" buttonLink="/"/>
            </div>
            <RedirectButton className="mt-3" buttonLabel="GO BACK TO LOGIN" buttonLink="/login"/>
        </FormContainer>
    );
};

export default ResetPassword;