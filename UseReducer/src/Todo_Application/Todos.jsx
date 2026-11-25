const Todos = ({ todos, index, dispatch, state }) => {
  console.log(state.DeleteId);
  function handleDelete(i) {
    dispatch({ type: "delete", id: i });
  }

  return (
    <li>
      <span>{index + 1}</span> : {todos} <input type="checkbox" />
      <button onClick={(e) => handleDelete(index)}>Delete</button>
      <button>Edit</button>
    </li>
  );
};

export default Todos;
