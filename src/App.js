import { useReducer, useRef } from 'react';
import './App.css';
import { updateCounter, downAction, upAction, resetAction, randomAction } from './store/actions/counter.action';
import reducer from './store/reducers/counter-reducer';
let initialstate = 0
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const userNumber = useRef(0)
  console.log(userNumber.current.value);
  return (
    <div className="App">
      {state}
      <br></br>
      <button onClick={() => dispatch(upAction())}>Up</button>
      <button onClick={() => dispatch(downAction())}>down</button>
      <button onClick={() => dispatch(resetAction())}>reset</button>
      <button onClick={() => dispatch(randomAction())}>random </button>
      <button onClick={() => dispatch(updateCounter(+userNumber.current.value))}>user Number </button>
      <br></br>
      <input ref={userNumber} type="number" />
    </div>
  );
}

export default App;
