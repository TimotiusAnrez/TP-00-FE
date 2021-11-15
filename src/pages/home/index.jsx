import React from "react";
import "./style.css";
import ActionButton from "../../components/ActionButton";
import FormContainer from "../../components/FormContainer";

const Home = () => {
    return (
        <FormContainer
            title="Ready to plan your day?"
            backgroundImage={"https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80"}
        >
            <p className="mb-5" style={{fontSize: 30, marginTop: -40, color: "grey"}}>
                Your future is created by what you do t̶o̶m̶o̶r̶r̶o̶w̶ <span style={{color: "crimson"}}>today.</span>
            </p>
            <ActionButton buttonLabel="GO TO LOGIN" buttonLink="/login"/>
            <br/>
            <ActionButton className="mt-3" buttonLabel="OR SIGN UP" buttonLink="/register"/>
        </FormContainer>
    );
};
 
export default Home;