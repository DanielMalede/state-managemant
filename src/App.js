import { useReducer } from 'react';
import './App.css';
import { UP_ACTION, DOWN_ACTION, RESET_ACTION ,RANDOM_ACTION } from './store/actions/counter.action';
import reducer from './store/reducers/counter-reducer';
let initialstate = 0
function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <div className="App">
      {state}
      <br></br>
      <button onClick={() => dispatch({ type: UP_ACTION })}>Up</button>
      <button onClick={() => dispatch({ type: DOWN_ACTION })}>down</button>
      <button onClick={() => dispatch({ type: RESET_ACTION })}>reset</button>
      <button onClick={() => dispatch({ type: RANDOM_ACTION })}>random </button>
    </div>
  );
}

export default App;
