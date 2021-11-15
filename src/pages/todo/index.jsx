import React, { useState } from 'react'
import "./style.css";
import useTheme from './useTheme';
import renderDate from './renderDate';
import SwitchButton from "../../components/SwitchButton";
import SquareCheckbox from '../../components/SquareCheckbox';

const Todo = () => {
    const { theme, toggleTheme } = useTheme();

    const [newTodo, setNewTodo] = useState("");
    const [opacity, setOpacity] = useState(0);
    const [transition, setTransition] = useState("none");
    
    const [todos, setTodos] = useState([
        { check: false, label: "Buy vegetables and frozen food [contoh yaa ini wkwk nanti apus aja]" },
        { check: false, label: "Pick up kids at daycare [contoh yaa ini wkwk nanti apus aja]" },
    ]);
    
    const onAddTodoClick = (e) => {
        e.preventDefault();
        const newTodos = [...todos, { check: false, label: newTodo }];
        setTodos(newTodos);
        setNewTodo("");
    };
    
    const onTodoCheckboxClick = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, check: !todo.check }
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const onTodoDeleteClick = (index) => {
        const newTodos = todos.filter((todo, i) => {
            if (i === index) {
                return false;
            }
            return todo;
        });
        setTodos(newTodos);
    }

    const hide = () => {
        setOpacity(0);
        setTransition("none");
    }

    const show = () => {
        setOpacity(0.3);
        setTransition("200ms");
    }

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
            <div className="p-4"
                style={{
                    position: "absolute",
                    left: "10vw",
                    right: "10vw",
                    top: "20vh",
                    width: "80vw",
                    height: "70vh",
                    backgroundColor: theme === "dark" ? "rgba(25, 25, 25, 0.8)" : "rgba(245, 245, 245, 0.8)",
                    boxShadow: theme === "dark" ? "15px 15px 15px -5px rgba(255,255,255,0.2)" : "15px 15px 15px -5px rgba(0,0,0,0.2)",
                    WebkitBoxShadow: theme === "dark" ? "15px 15px 15px -5px rgba(255,255,255,0.2)" : "15px 15px 15px -5px rgba(0,0,0,0.2)",
                }}>
                <div class="row mb-3 g-5 pt-3">
                    <div class="col-auto">
                        <input type="text" 
                            class="form-control col-auto" 
                            id="newTodo" 
                            style={{width: "60vw", padding: 8}} 
                            placeholder=" ✍🏻 What needs to be done today?"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        /> 
                    </div>
                    <button style={{
                            width: 200,
                            padding: 10,
                            border: "none",
                            backgroundColor: "#cf77a5",
                            fontWeight: 400,
                            fontSize: 15,
                            color: "white",
                            textDecoration: "none",
                        }}
                        onClick={onAddTodoClick}>
                        Add
                    </button>
                </div>
                {
                    todos.map((todo, index) => {
                        return (
                            <div className="d-flex flex-row" key={index}
                                style={{
                                    color: theme === "dark" ? "whitesmoke" : "black",
                                    fontSize: 20,
                                    marginLeft: 20,
                                }}>
                                <SquareCheckbox onClick={() => onTodoCheckboxClick(index)} checked={todo.check}/>
                                <p style={{
                                        marginBottom: 0, 
                                        transform: "translateY(5px)"
                                    }}
                                    onMouseEnter={show} onMouseLeave={hide}>
                                    {todo.label}
                                </p>

                                <button onClick={() => onTodoDeleteClick(index)}
                                    style={{
                                        border: "0px solid white",
                                        backgroundColor: "transparent",
                                        paddingLeft: 15,
                                        opacity: `${opacity}`,
                                        transition: `${transition}`
                                    }}
                                    onMouseEnter={show} onMouseLeave={hide}>
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </div>
                        )
                    })
                }
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