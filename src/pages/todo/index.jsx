import React from 'react'
import "./style.css";
import useTheme from './useTheme';
import SwitchButton from "../../components/SwitchButton";

const renderDate = () => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date().toLocaleString("en-EN", options);
};

const Todo = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="d-flex justify-content-center align-items-end row m-0 px-5" 
            style={{
                height: "100vh",
                width: "100vw",
                backgroundImage: theme === "dark" ? `url("https://images.unsplash.com/photo-1636673024281-8a350df7fc66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80")` : `url("https://images.unsplash.com/photo-1614587431569-caafde7537d3?ixid=MnwxMjA3fDB8MH")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="text-center" 
                style={{
                    width: "100vw",
                    height: "20vh",
                }}>
                <p className="fontSecondary" 
                    style={{
                        fontSize: 75,
                        transform: "translateX(0px) translateY(15px)", 
                        color: theme === "dark" ? "black" : "whitesmoke",
                    }}>
                    My To-do List
                </p>
                <p style={{
                    fontSize: 25, 
                    transform: "translateX(0px) translateY(-25px)", 
                    color: theme === "dark" ? "paleturquoise" : "khaki",
                    }}>
                    {renderDate()}
                </p>
                <button className="d-flex justify-content-start" 
                    type="button" onClick={toggleTheme}
                    style={{
                        border: "0px solid white",
                        backgroundColor: "transparent",
                        transform: "translateX(-15px) translateY(-90px)",
                    }}>
                    <SwitchButton/>
                </button>
            </div>
            <div className="p-3"
                style={{
                    width: "100vw",
                    height: "80vh",
                    backgroundColor: theme === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(255, 255, 255, 0.3)",
                }}>

                test
            </div>
        </div>
    );
};
 
export default Todo;