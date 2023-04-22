/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */

import React from "react";
import { useReducer } from "react";
function Counter() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT": {
        return {
          count: state.count + action.payload,
          name: "aamir",
          age: 25,
        };
      }

      case "DECREAMENT": {
        return {
          count: state.count - 1,
        };
      }

      default: {
        return {
          state,
        };
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 10 });
  console.log("ty", state);

  return (
    <div>
      Counter{state.count}
      <button
        onClick={() => {
          dispatch({
            payload: 20,
            type: "INCREMENT",
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREAMENT" });
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
