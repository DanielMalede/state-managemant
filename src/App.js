import { useReducer, useRef } from 'react';
import './App.css';
import { userNumberCounterAction, downCounterAction, upCounterAction, resetCounterAction, randomCounterAction } from './store/actions/counter.action';
import reducer from './store/reducers/counter-reducer';
let initialstate = 0
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const userNumber = useRef(0)
  return (
    <div className="App">
      {state}
      <br></br>
      <button onClick={() => dispatch(upCounterAction())}>Up</button>
      <button onClick={() => dispatch(downCounterAction())}>down</button>
      <button onClick={() => dispatch(resetCounterAction())}>reset</button>
      <button onClick={() => dispatch(randomCounterAction())}>random </button>
      <button onClick={() => dispatch(userNumberCounterAction(+userNumber.current.value))}>user Number </button>
      <br></br>
      <input ref={userNumber} type="number" />
    </div>
  );
}

export default App;
