import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div>
                <h1>404 Error Not Found</h1>
                <button>
                    <Link to="/">BACK HOME</Link>
                </button>
            </div>
        </div>
    );
}

export default PageNotFound;