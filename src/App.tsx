import './App.css';
import React, {useState} from "react"

import { InputField } from './components/InputField';
import {ToDo} from "./Model"
import ToDoList from './components/ToDoList';


const App: React.FC= () => {

  const [toDo, setToDo] = useState<string>("")
  const [toDos, setToDos] = useState<ToDo[]>([])

  const handleAdd = (e:React.FormEvent) => { 
    e.preventDefault()

    if(toDo) { 
      setToDos([...toDos, {id: Date.now(), toDo: toDo, isDone: false}])
      setToDo("")
    }

  }

  console.log(toDo)
  console.log(toDos)

  return (
    <div className='App'>
      <span className='heading'>Taskify</span>
      <InputField toDo={toDo} setToDo={setToDo} handleAdd={ (e) => handleAdd(e)}/>
      <ToDoList toDos={toDos} setToDos={setToDos}/>
    </div>
  );
}

export default App;
