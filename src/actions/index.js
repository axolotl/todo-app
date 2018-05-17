export const dispatchTodo = (id, todo) => ({
  type: 'ADD_TODO',
  id,
  todo,
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id,
})

export const addTodo = (todo) => (dispatch, getState) => {
  // find id of last todo and increment by 1
  const { todos } = getState();
  const id = todos.length > 0 ? todos[todos.length-1].id + 1 : 0;

  dispatch(dispatchTodo(id, todo));
}