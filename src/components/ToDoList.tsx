import React from 'react'
import { ToDo } from '../Model'
import SingleToDo from './SingleToDo'
import "./styles.css"

interface Props { 
    toDos: ToDo[], 
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>,
}

const ToDoList = ({toDos, setToDos}:Props) => {
  return (
    <div className='toDos'>
        {toDos.map((toDo) => 
        <SingleToDo toDo={toDo} key={toDo.id} toDos={toDos} setToDos={setToDos}/>
        )}
    </div>
  )
}

export default ToDoList