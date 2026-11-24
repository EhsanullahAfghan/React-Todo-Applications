import { useReducer } from "react";
import Header from "./Header";
import MainContent from "./MainContent";

import "./index.css";

const initial = {
  modal: false,
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
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  return (
    <div className="App">
      <Header state={state} dispatch={dispatch} />

      <MainContent />
    </div>
  );
};

export default App;
