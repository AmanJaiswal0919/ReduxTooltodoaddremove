import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addtodo } from "./reducer/todoSlice"
function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const addtodohandler = function (e) {
        e.preventDefault()
        dispatch(addtodo(input))
        setInput('')
    }
  return (
      <form onSubmit={addtodohandler} >
          <input type="text" placeholder="enter a todo" value={input}
              onChange={function (e) { setInput(e.target.value) }} />
          <button type="submit">add</button>
    </form>
  )
}
export default AddTodo