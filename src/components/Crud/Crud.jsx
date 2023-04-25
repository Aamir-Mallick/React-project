import React, { useReducer, useState } from "react";
const initial = {
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA": {
      return {
        data: [...state.data, action.payload],
      };
    }
    case "UPDATE_DATA": {
      const updatedData = state.data.map((x) => {
        if (x.id === action.payload.id) {
          return {
            id: action.payload.id,
            value: action.payload.value,
          };
        }
        return {
          ...x,
        };
      });
      return {
        data: updatedData,
      };
    }
    case "DELETE_DATA": {
      const deleteData = state.data.filter((val) => val.id !== action.id);
      return {
        data: deleteData,
      };
    }

    default: {
      return {
        state,
      };
    }
  }
};

export const Crud = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  const [inputValue, setInputValue] = useState("");
  const [isUpdate, setIsUpdate] = useState("");
  return (
    <div>
      Crud
      <div>
        {state?.data?.map((x) => {
          return (
            <div key={x.id}>
              <span>{x.value}</span>
              <button
                onClick={() => {
                  setInputValue(x.value);
                  setIsUpdate(x.id);
                }}
              >
                update
              </button>
              <button
                onClick={() => dispatch({ type: "DELETE_DATA", id: x.id })}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='add'
      />
      <button
        onClick={() => {
          if (isUpdate) {
            dispatch({
              type: "UPDATE_DATA",
              payload: {
                id: isUpdate,
                value: inputValue,
              },
            });
          } else {
            dispatch({
              type: "ADD_DATA",
              payload: {
                id: Date.now(),
                value: inputValue,
              },
            });
          }

          setInputValue("");
          setIsUpdate("");
        }}
      >
        Add
      </button>
    </div>
  );
};
