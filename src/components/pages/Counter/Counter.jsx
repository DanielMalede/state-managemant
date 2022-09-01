import "./Counter.css";
import React from "react";
import {upCounterAction,downCounterAction,resetCounterAction,randomCounterAction,userNumberCounterAction,} 
from "../../../store/actions/counter.action";
import { useRef } from "react";
import { useContext } from "react";
import { counterContext } from "../../../context/Counter-Context/Counter-Context";

function Counter() {
  const { conterState, dispatch } = useContext(counterContext);
  const userNumber = useRef(conterState);
  return (
    <div className="counter">
      <h1>Counter</h1>
      {conterState}
      <br></br>
      <br></br>
      <button onClick={() => dispatch(upCounterAction())}>Up</button>
      <button onClick={() => dispatch(downCounterAction())}>down</button>
      <button onClick={() => dispatch(resetCounterAction())}>reset</button>
      <button onClick={() => dispatch(randomCounterAction())}>random </button>
      <button onClick={() => dispatch(userNumberCounterAction(+userNumber.current.value))}>
        user Number{" "}
      </button>
      <br></br>
      <br></br>
      <input  ref={userNumber} type="number" />
    </div>
  );
}

export default Counter;
