import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValueTypes = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "ReactJS", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValueTypes>("all")

    let tasksForTodolist = tasks

    if (filter === "active") {
        tasksForTodolist = tasks.filter(el => el.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(el => el.isDone === true)
    }

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(el => el.id !== id)
        setTasks(filteredTasks)
    }

    function changeFilter(value:FilterValueTypes) {
        setFilter(value)
    }
    return (
        <div className="App">
            <Todolist
                title={'What to learn'}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
