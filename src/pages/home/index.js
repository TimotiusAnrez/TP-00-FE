import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center backgroundHome" style={{height: "100vh"}}>
            <div className="d-flex justify-content-center align-items-center containerHome" style={{height: "50vh", width: "70vw"}}>
                <div className="text-center">
                    <p className="fontSecondary" style={{fontSize: 80}}>Ready to plan your day?</p>
                    <p style={{fontSize: 30, marginTop: -50, marginBottom: 50, color: "grey"}}>Your future is created by what you do today t̶o̶m̶o̶r̶r̶o̶w̶.</p>
                    <button className="buttonStyle me-3">
                        <Link className="buttonStyle" style={{textDecoration: "none"}}to="/login">GO TO LOGIN</Link>
                    </button>
                    <button className="buttonStyle">
                        <Link className="buttonStyle" style={{textDecoration: "none"}} to="/register">OR SIGN UP</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Home;