import React from "react";

const FormContainer = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center" 
            style={{
                height: "100vh",
                width: "100vw",
                backgroundImage: `url(${props.backgroundImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="p-5" 
                style={{
                    width: "70vw",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: 30,
                }}
            >
                <div className="text-center">
                    <p className="fontSecondary" style={{fontSize: 70}}>
                        {props.title}
                    </p>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default FormContainer;