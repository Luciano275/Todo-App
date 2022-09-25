import { ADD_TODO, REMOVE_TODO, SEARCH_TODO } from "./acciones";
import { combineReducers } from "redux";

const initial_state = {
  todos: [],
  searchTodos: []
};

const todoAppReducer = (state = initial_state.todos, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      let lg = state.length;
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, lg),
      ];
    default:
      return state;
  }
};

const todoAppSearch = (state = initial_state.searchTodos, action) => {
  switch (action.type) {
    case SEARCH_TODO:
      return [...action.payload.todos.filter((todo) => todo.match(new RegExp(action.payload.typing, 'gi')))];
    default:
      return state;
  }
};

export const todoApp = combineReducers({
  todoAppReducer,
  todoAppSearch,
});
