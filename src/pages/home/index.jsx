import React from "react";
import "./style.css";
import RedirectButton from "../../components/RedirectButton";
import FormContainer from "../../components/FormContainer";
import homeWallpaper from "../../assets/homeWallpaper.jpeg";

const Home = () => {
    return (
        <FormContainer
            title="Ready to plan your day?"
            backgroundImage={homeWallpaper}
        >
            <p className="mb-5" style={{fontSize: 30, marginTop: -40, color: "grey"}}>
                Your future is created by what you do t̶o̶m̶o̶r̶r̶o̶w̶ <span style={{color: "crimson"}}>today.</span>
            </p>
            <RedirectButton buttonLabel="GO TO LOGIN" buttonLink="/login"/>
            <br/>
            <RedirectButton className="mt-3" buttonLabel="OR SIGN UP" buttonLink="/register"/>
        </FormContainer>
    );
};
 
export default Home;