import React from "react";
import { useContext } from "react";
import { myContext, dispatchContext } from "../App";

export const ContextComponent = () => {
  const data = useContext(myContext);
  const dispatch = useContext(dispatchContext);
  console.log(data);

  return (
    <div>
      <input
        type='text'
        placeholder='name'
        onChange={(e) =>
          dispatch({ type: "UPDATENAME", payload: e.target.value })
        }
      />
      <input
        type='text'
        placeholder='age'
        onChange={(e) =>
          dispatch({ type: "UPDATEAGE", payload: e.target.value })
        }
      />
    </div>
  );
};
