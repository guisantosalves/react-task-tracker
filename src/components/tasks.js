import Task from './task'

//State is immutable
const Tasks = ({tasks, onDelete, onToggle})=>{

    return(
        //quando passa o task a arrow function, dentro do component é passado o objeto completo
        //podendo usar propriedades desse objeto dentro de Task (arquivo)
        <>
            {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </>
    )
} 

export default Tasks