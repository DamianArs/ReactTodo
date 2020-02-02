import React from 'react';


import { Task } from './Task';

export const TaskList = (props) => {
    const active = props.tasks.filter(task => task.status === true)
    active.sort((a, b) => {
        if (a.name < b.name) {


            return -1;


        }
        if (a.name > b.name) {
            return 1
        }
        return 0
    })
    const done = props.tasks.filter(task => task.status === false)
    const activeTasks = active.map(task =>
        <Task key={task.id} task={task} delete={props.delete} change={props.change} />)
    const doneTasks = done.map(task =>
        <Task key={task.id} task={task} delete={props.delete} change={props.change} endDate={props.endDate} />)
    return (
        <>
            <h2>Zadania do zrobienia ({active.length})</h2>
            {activeTasks.length > 0 ? activeTasks : <h5>Nie masz zadań!</h5>}
            <hr />
            <h4>Zadania zrobione ({done.length})</h4>
            {doneTasks}
        </>
    )

}
