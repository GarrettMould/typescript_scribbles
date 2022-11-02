import React, {useState} from 'react'
import { AiOutlineEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import { ToDo } from '../Model'
import ToDoList from './ToDoList';

type Props = { 
    toDo: ToDo, 
    toDos: ToDo[],
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>

}

const SingleToDo = ({toDo, toDos, setToDos, }: Props) => {

  const [edit, setEdit] = useState<boolean>(false)
  const [editToDo, setEditToDo] = useState<string>(toDo.toDo)

  const handleDone = (id:number) => { 
    setToDos(toDos.map((toDo) => toDo.id === id ? {...toDo, isDone: !toDo.isDone} : toDo))
  }

  const handleDelete = (id:number) => { 
    setToDos(toDos.filter((toDo) => toDo.id !== id))
  }

  const handleEdit = (e:React.FormEvent, id:number) => { 
    e.preventDefault();

    setToDos(toDos.map((toDo) => (
      (toDo.id === id ? {...toDo, toDo:editToDo} : toDo)
    )))

    setEdit(false)
  }

  return (
    <form className='toDos_single'>
      {edit ? (
        <input value={editToDo} onSubmit={(e)=> { handleEdit(e, toDo.id)
        
        }}
        
        onChange={(e) => { 
          setEditToDo(e.target.value)
        }} className="toDos_single--text"/>
      ) : (
        toDo.isDone ? (
          <s className='toDos_single--text'>{toDo.toDo}</s>
        ) : (
          <span className='toDos_single--text'>{toDo.toDo}</span>
        )
      )      
      }
      
      
      <div>
        <span className='icon' onClick={ () => {
            if(!edit && !toDo.isDone) { 
              setEdit(!edit)
            }
        }
        
        }>
          <AiOutlineEdit/>
        </span>
        <span className='icon' onClick={ () => handleDelete(toDo.id)}>
        <AiFillDelete/>
        </span>
        <span className='icon' onClick={ () => handleDone(toDo.id)}>
        <MdDone/>
        </span>
      </div>
    </form>
  )
}

export default SingleToDo