import logo from "./logo.svg";
import { useContext, createContext, useReducer } from "react";
// import "./App.css";
import { MenuFolder } from "./components/MenuFolder";
import Counter from "./components/Counter";
import ServerCall from "./components/SeverCall";
import { InputComponent } from "./components/InputComponent";
import { Enhanced } from "./components/LogInLogOut";
import { RenderProps } from "./components/RenderProps";
import { ContextComponent } from "./components/ContextComponent";

export const myContext = createContext(null);
export const dispatchContext = createContext(null);

const renderNewValue = (data) => {
  return (
    <div style={{ backgroundColor: data }}>
      <h1>my</h1>
      <p>name</p>
      is {data}
    </div>
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATENAME": {
      return {
        ...state,
        name: action.payload,
      };
    }

    case "UPDATEAGE": {
      return {
        ...state,
        age: action.payload,
      };
    }
    default: {
      return {
        state,
      };
    }
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, { name: "", age: "" });
  console.log("state", state);
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <MenuFolder /> */}
        {/* <Counter /> */}
        {/* <ServerCall /> */}
        {/* <InputComponent /> */}
        {/* <Enhanced value='welcome' /> */}
        {/* <RenderProps name={(data) => renderNewValue(data)}>
          this is new world
        </RenderProps> */}
        <myContext.Provider value={state}>
          <dispatchContext.Provider value={dispatch}>
            <ContextComponent />
          </dispatchContext.Provider>
        </myContext.Provider>
      </header>
    </div>
  );
}

export default App;
