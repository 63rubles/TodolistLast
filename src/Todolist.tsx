import React from "react";
import {FilterValueTypes} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id:number)=>void
    changeFilter: (value: FilterValueTypes) => void
}

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export function Todolist(props: TodolistPropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el) => {
                    return (
                        <li key={el.id}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                            <button onClick={()=>{props.removeTask(el.id)}}>✖</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={()=>{
                    props.changeFilter("all")
                }}>All</button>

                <button onClick={()=>{
                    props.changeFilter("active")
                }}>Active</button>

                <button onClick={()=>{
                    props.changeFilter("completed")
                }}>Completed</button>
            </div>
        </div>
    );
}