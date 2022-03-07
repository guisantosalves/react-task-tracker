import React from 'react';
import Header from './components/Header.js'
import Tasks from './components/tasks'
import { useState } from 'react'
import AddTask from './components/AddTask.js'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Padaria do sao joao',
        day: 'dia 05 de março',
        reminder: false,
    },
    {
        id: 2,
        text: 'casa de vidro',
        day: 'dia 26 de maio',
        reminder: false,
    },
    {
        id: 3,
        text: 'mecanica',
        day: 'dia 25 de outubro',
        reminder: false,
    }
])

//add task
const addTask = (task)=>{
  const id = Math.floor(Math.random() * 10000) + 1;
  const newTask = {id, ...task};
  setTasks([...tasks, newTask]);
}

//delete tasks
const DeleteTasks = (id)=>{
  setTasks(tasks.filter((task) => task.id !== id));
}

//toggle reminder
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task));
}

  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={DeleteTasks} onToggle={toggleReminder}/>
      ) : ('No tasks to show')}
    </div>
  );

}



export default App;
