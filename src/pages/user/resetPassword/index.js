import React from 'react';
import { Link } from 'react-router-dom';

const ResetPassword = () => {
    return (
        <div>
            <div>
                <form
                    action="/forgotPassword" 
                    method="post"
                    onSubmit=""
                    >
                    <h1>Forgot Password?</h1>
                    <input
                        onChange="" 
                        className="form-control" 
                        name="email"
                        placeholder="email"
                    />
                    <button 
                        className="btn btn-outline-primary" 
                        type="submit"
                        >
                        Send Verification
                    </button>
                </form>
                <button>
                    <Link to="/login">BACK TO LOGIN</Link>
                </button>
            </div>
        </div>
    );
}

export default ResetPassword;