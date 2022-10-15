import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {Increment, Decrement} from './Actions/counter';
import {sign} from './Actions/counter';

function App() {
  const counter=useSelector((state)=>state.counter)
  const signin1=useSelector((state)=>state.signin1)
  const dispatch=useDispatch()

  const incr=()=>{
    dispatch(Increment())
  }
  const decr=()=>{
    dispatch(Decrement())
  }
  const signIn=()=>{
    dispatch(sign());
  }
  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Counter:{counter}</h2>
      <button onClick={incr}>Increase</button>
      <button onClick={decr}>Decrease</button>
      <br /> <br />
      <h3>{signin1}</h3>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
}

export default App;
