import React from 'react'
import "./style.css";
import useTheme from './useTheme';
import renderDate from './renderDate';
import SwitchButton from "../../components/SwitchButton";

const Todo = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <div className="d-flex justify-content-center align-items-start row m-0 px-5" 
                style={{
                    height: "40vh",
                    width: "100vw",
                    backgroundImage: theme === "dark" ? `url("https://images.unsplash.com/photo-1636673024281-8a350df7fc66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80")` : `url("https://images.unsplash.com/photo-1614587431569-caafde7537d3?ixid=MnwxMjA3fDB8MH")`,
                    backgroundPosition: theme === "dark" ? "center top" : "50% 20%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >   
                <div className="text-center" 
                    style={{
                        width: "100vw",
                        height: "20vh",
                    }}>
                    <div className="fontSecondary" 
                        style={{
                            fontSize: 75,
                            transform: "translateX(0px) translateY(15px)", 
                            color: theme === "dark" ? "cornsilk" : "lavenderblush",
                        }}>
                        My To-do List
                    </div>
                    <div className="col-12 row" 
                        style={{
                            transform: "translateX(10px) translateY(-10px)",
                        }}>
                        <button className="col-3" 
                            type="button" onClick={toggleTheme}
                            style={{
                                border: "0px solid white",
                                backgroundColor: "transparent",
                                transform: "translateX(60px) translateY(-15px)",
                            }}>
                            <SwitchButton/>
                        </button>
                        <p className="col-6 text-center" 
                            style={{
                                fontSize: 25, 
                                color: theme === "dark" ? "lightcyan" : "lightgoldenrodyellow",
                            }}>
                            {renderDate()}
                        </p>
                        <button className="col-3" 
                            type="button"
                            style={{
                                fontSize: 40,
                                color: theme === "dark" ? "cornsilk" : "lavenderblush",
                                border: "0px solid white",
                                backgroundColor: "transparent",
                                transform: "translateX(60px) translateY(-15px)",
                            }}>
                            <i class="fas fa-user"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className=""
                    style={{
                        position: "absolute",
                        left: "10vw",
                        right: "10vw",
                        top: "20vh",
                        width: "80vw",
                        height: "70vh",
                        backgroundColor: "rgba(245, 245, 245, 0.8)",
                        boxShadow: "15px 15px 15px -5px rgba(0,0,0,0.2)",
                        WebkitBoxShadow: "15px 15px 15px -5px rgba(0,0,0,0.2)",
                    }}>
                </div>
            <div className="" 
                style={{
                    height: "60vh",
                    width: "100vw",
                    backgroundColor: theme === "dark" ? "#0F2F2F" : "thistle",
                }}>

            </div>
        </div>
    );
};
 
export default Todo;