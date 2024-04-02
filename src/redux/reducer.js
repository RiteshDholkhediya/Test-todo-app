import {
  ADD_TODO,
  CHANGE_BTN_TEXT,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  UPDATE_ALL_TODOS,
  UPDATE_TODO,
} from "./actionTypes";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
  setBtnText: "Add Todo",
};

const generateId = () => uuidv4();

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, id: generateId(), completed: false },
        ],
        setBtnText: state.setBtnText,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter(
          (todoItem) => todoItem.id !== action.payload.id
        ),
        setBtnText: state.setBtnText,
      };

    case UPDATE_TODO:
      return {
        todos: state.todos.map((todoItem) =>
          todoItem.id === action.payload.id
            ? { ...todoItem, text: action.payload.text }
            : todoItem
        ),
        setBtnText: state.setBtnText,
      };

    case TOGGLE_COMPLETED:
      return {
        todos: state.todos.map((todoItem) =>
          todoItem.id === action.payload.id
            ? { ...todoItem, completed: !todoItem.completed }
            : todoItem
        ),
        setBtnText: state.setBtnText,
      };

    case CHANGE_BTN_TEXT:
      return {
        todos: state.todos,
        setBtnText: action.payload.text,
      };

    case UPDATE_ALL_TODOS:
      return {
        todos: action.payload.todos,
        setBtnText: state.setBtnText,
      };

    default:
      return state;
  }
};

export default todoReducer;
