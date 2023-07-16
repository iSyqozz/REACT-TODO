import { useState, useEffect } from 'react'
import Title from './components/Title'
import "./App.css"
import Task from "./components/Task"

const App = () => {
  const [Inp, setInp] = useState('')
  const [Tasks, setTasks] = useState(['sample task']);

  function add_task() {
    const task = Inp;
    setInp('')
    setTasks([...Tasks, task])
  }

  function remove_task(val) {
    console.log(val)
    let updatedList = Tasks.filter(item => item !== val);
    setTasks(updatedList)
  }

  function edit_task(oldTask, newTask) {
    const updatedTasks = Tasks.map(task => {
      if (task === oldTask) {
        return newTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  }


  return (
    <>
      <Title />
      <div className='mid-section'>
        <div className='todo-wrapper'>
          <div className='todo-input-wrapper'>
            <div className='todo-title'>
              My Tasks
            </div>
            <div className='todo-field-wrapper'>
              <input
                className='todo-input'
                value={Inp}
                placeholder='Enter task here'
                onChange={(e) => {
                  setInp(e.target.value)
                }}
              >
              </input>
              <div className='todo-button' onClick={add_task}>+</div>
            </div>
          </div>
          <div className='todo-list'>
            {Tasks.map(task => {
              return (
                <Task
                  name={task}
                  removeTask={remove_task}
                  editTask={edit_task}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App