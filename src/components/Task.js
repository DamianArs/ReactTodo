import React from 'react';

export const Task = (props) => {

    return (
        <div>
            <p className={props.task.priorytet ? 'prior' : null}>{props.task.name}</p>
            <p>{props.task.date} <button onClick={() => props.change(props.task.id)}>Zadanie zrobione</button><button onClick={() => props.delete(props.task.id)}>x</button></p>
            {props.task.endDate ? <p>Zadanie wykonane: {props.task.endDate}</p> : null}
        </div>
    )
}

// id={props.id} name={props.name} date={props.date} priorytet={props.priorytet} endDate={props.endDate}