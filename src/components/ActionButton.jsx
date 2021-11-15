import React, { useState } from "react";
import { Link } from 'react-router-dom';

const ActionButton = (props) => {
    const [opacity, setOpacity] = useState("initial");
    const [transition, setTransition] = useState("none");

    return (
        <button
            className={props.className}
            style={{
                width: 200,
                padding: 10,
                border: "none",
                backgroundColor: "#cf77a5",
                fontWeight: 400,
                fontSize: 15,
                color: "white",
                textDecoration: "none",
                opacity: `${opacity}`,
                transition: `${transition}`,
            }}
            onMouseEnter={() => {
                setOpacity(0.7);
                setTransition("200ms");
            }}
            onMouseLeave={() => {
                setOpacity("initial");
                setTransition("none");
            }}
        >
            <Link style={{textDecoration: "none", color: "white"}} to={props.buttonLink}>
                {props.buttonLabel}
            </Link>                  
        </button>
    );
};

export default ActionButton;