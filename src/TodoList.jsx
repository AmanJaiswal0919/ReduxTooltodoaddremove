import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { removetodo } from "./reducer/todoSlice"

function TodoList() {
    const d = useSelector(state => state.todos)
    const dispatch =useDispatch()
  return (
    <>
      <div>TodoList</div>
      {d.map((val) => (
        <li key={val.id}>
          {val.text}
          <button onClick={()=>dispatch(removetodo(val.id))}>remove</button>
        </li>
      ))}
    </>
  );
}
export default TodoList