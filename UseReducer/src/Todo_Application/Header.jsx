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
          <input type="text" placeholder="Todo " />
          <div className="buttons">
            <button className="submit">Add Todo</button>
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
