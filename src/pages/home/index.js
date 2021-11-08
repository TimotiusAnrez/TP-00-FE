import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";

const Home = () => {
    return (
        <div>
            <h1>ini home</h1>
            <button>
                <Link to="/login">GO TO LOGIN</Link>
            </button>
            <button>
                <Link to="/register">OR REGISTER</Link>
            </button>
        </div>
    );
}
 
export default Home;