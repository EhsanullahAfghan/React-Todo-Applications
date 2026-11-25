import { useReducer } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

import "./index.css";

let initial = {
  modal: false,
  todo: [],

  DeleteId: undefined,

  inputValue: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "modal":
      return {
        ...state,
        modal: (state.modal = true),
      };

    case "close_window":
      return {
        ...state,
        modal: (state.modal = false),
      };

    case "inputs":
      return {
        ...state,
        inputValue: action.payLoad,
      };

    case "add_todo":
      return {
        ...state,
        todo: [...state.todo, state.inputValue],
      };

    case "delete":
      return {
        ...state,
        DeleteId: action.id,
        todo: state.todo.filter((tod, i) => i !== action.id),
      };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <div className="App">
      <Header state={state} dispatch={dispatch} />

      <MainContent state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
