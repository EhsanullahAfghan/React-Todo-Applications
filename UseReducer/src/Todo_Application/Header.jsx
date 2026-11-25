const Header = ({ state, dispatch }) => {
  function handleNewTodo() {
    dispatch({ type: "modal" });
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function handleClose() {
    dispatch({ type: "close_window" });
  }

  return (
    <header className="Header">
      <button className="new_todo" onClick={handleNewTodo}>
        new todo
      </button>
      <button className="filter">Filter</button>

      <div
        className={`overlay ${state.modal ? "overlay_removed" : "add_opacity"}`}
      >
        <form onSubmit={(e) => handleForm(e)}>
          <input
            type="text"
            placeholder="Todo"
            value={state.inputValue}
            onChange={(e) =>
              dispatch({ type: "inputs", payLoad: e.target.value })
            }
          />
          <div className="buttons">
            <button
              className="submit"
              onClick={() => dispatch({ type: "add_todo" })}
            >
              Add Todo
            </button>
            <button className="cancel" onClick={() => handleClose()}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
