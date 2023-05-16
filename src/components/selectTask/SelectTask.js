import React from 'react';
import './selectTask.css';

const SelectTask = props => {
  const {tasks, type, changeStatus, setSelectVisible} = props

  const handleMoveTask = (e) => {
    const newTask = tasks.find(task => task.id === e.target.value)
    if(e.target.value !== "empty") {
      changeStatus(newTask, type)
    }
    setSelectVisible(false)
  }


  return (
    <div className='select_wrapper'>
      <select className='select' onChange={handleMoveTask}>
        <option defaultValue="empty">+ Add card</option>
        {tasks.map(task => {
          return <option key={task.id} value={task.id}>{task.title}</option>
        })}
      </select>
    </div>
  )
}

export default SelectTask