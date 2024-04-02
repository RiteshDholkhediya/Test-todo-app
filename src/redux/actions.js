//import { v4 as uuidv4 } from 'uuid';

import {
  ADD_TODO,
  CHANGE_BTN_TEXT,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
  UPDATE_ALL_TODOS,
  UPDATE_TODO,
} from "./actionTypes";

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

const toggleCompleted = (id) => ({
  type: TOGGLE_COMPLETED,
  payload: { id },
});

const updateTodo = (id, newText) => ({
  type: UPDATE_TODO,
  payload: { id, text: newText },
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

const changeBtnText = (text) => ({
  type: CHANGE_BTN_TEXT,
  payload: { text },
});

const updateAllTodos = (todos) => ({
    type: UPDATE_ALL_TODOS,
    payload: {todos}
})

export { addTodo, removeTodo, updateTodo, toggleCompleted, changeBtnText, updateAllTodos};
