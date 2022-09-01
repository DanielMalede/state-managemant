import React from "react";
import { createContext,useReducer } from "react";
import counterReducer from "../../store/reducers/counter-reducer";

export const counterContext =  createContext()
function CounterProvider({children}) {
  const [conterState, dispatch] = useReducer(counterReducer, 0);
  return (
    <div className="counter">
      <counterContext.Provider value={{conterState,dispatch}}>
          {children}
      </counterContext.Provider>

    </div>
  );
};

export default CounterProvider;
