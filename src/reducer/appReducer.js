export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task, index) =>
          index === action.payload
            ? { ...task, done: !task.done }
            : task
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
};