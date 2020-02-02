import React from 'react';

import './App.css';
import { AddTask } from './AddTask';
import { TaskList } from './TaskList';


class App extends React.Component {
  state = {
    tasks: [
      {
        id: 0,
        name: 'Zadanie 1',
        date: '2020-01-29',
        priorytet: true,
        endDate: null,
        status: true
      },
      {
        id: 1,
        name: 'Zadanie 2',
        date: '2020-01-29',
        priorytet: false,
        endDate: null,
        status: true
      },
      {
        id: 2,
        name: 'Zadanie 3',
        date: '2020-01-29',
        priorytet: true,
        endDate: null,
        status: false
      }
    ]
  }
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }
  changeStatus = (id) => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
      if (task.id === id) {
        task.status = false
        task.endDate = new Date().toDateString()
      }
    })
    this.setState({
      tasks
    })

  }
  addTask = (name, date, priorytet) => {
    const task = {
      id: this.state.tasks.length,
      name: name,
      date: date,
      priorytet: priorytet,
      endDate: null,
      status: true
    }
    this.setState({
      task: this.state.tasks.push(task)
    })
    return true;


  }
  render() {
    return (
      <>
        <h1>Lista ToDo</h1>
        <AddTask click={this.addTask} />
        <hr />
        <TaskList key={this.state.tasks.id} tasks={this.state.tasks} delete={this.deleteTask} change={this.changeStatus} />
      </>
    );
  }
}

export default App;
