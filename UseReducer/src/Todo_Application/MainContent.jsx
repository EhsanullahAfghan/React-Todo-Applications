import Todos from "./Todos";

const MainContent = ({ state, dispatch }) => {
  return (
    <div className="content">
      <ul>
        {state.todo.map((todos, index) => (
          <Todos
            key={todos}
            todos={todos}
            index={index}
            dispatch={dispatch}
            state={state}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainContent;
