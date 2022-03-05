import React from 'react';
import Header from './components/Header.js'
import Tasks from './components/tasks'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'sexo',
        day: 'exemp2exmp2exmep2',
        reminder: 'sexosexo',
    },
    {
        id: 2,
        text: 'sexo2',
        day: 'exemp2exmp2exmep2',
        reminder: 'sexosexo',
    },
    {
        id: 3,
        text: 'sexo3',
        day: 'exemp2exmp2exmep2',
        reminder: 'sexosexo',
    }
])


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );

}


export default App;
