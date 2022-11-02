import React, {useRef} from 'react'
import './styles.css'

interface Props { 
  toDo: string, 
  setToDo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e:React.FormEvent) => void
}

export const InputField: React.FC<Props> = ({toDo, setToDo, handleAdd}:  Props) => {

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    
    <form className='input' onSubmit={handleAdd}>
    <input ref={inputRef} value={toDo} onChange={(e) => setToDo(e.target.value)} type='input' placeholder="Enter a task" className="input_box"></input>
        <button className="input_submit" type="button" onClick={(e) => {handleAdd(e)
        inputRef.current?.blur();
        }}>Go</button>
    </form>
    
  )
}
