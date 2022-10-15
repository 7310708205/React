const initialState = {
  todos: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => TransformStreamDefaultController.id !== action.payload
        ),
      };
  }
};
export default reducer;
