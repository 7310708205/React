import './App.css';
import {useDispatch, useSelector} from 'react-redux';

const Todos=()=>{
  const todos=useSelector(state=>state.todos);
  const handleClick= id =>dispatch({
    type: 'DELETE_TODO',
    payload: id,
  })
  if(!todos || !todos.length) {
    return <p>No Todos</p>
  }
  return(
    <ul>
      {todos.map(todo=> <li onClick={handleClick}> {todo.label}</li>)}
    </ul>
  )
}
const TodoInput=()=>{
  const dispatch=useDispatch();
  const [newTodo, setNewTodo] = useState();
  const handleChange = event => setNewTodo(event.target.value);
  const handleClick=()=>dispatch({
    type: 'ADD_TODO',
    payload:{
      label:newTodo,
      id: Math.ceil(Math.random()*100),
    }
  })
  return(
    <>
      <input value={newTodo} onChange={handleChange} type="text" />
      <button onClick={handleClick}>Add Todo</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <h2>ToDo List</h2>
      <Todos />
      <TodoInput />
    </div>
  );
}

export default App;
