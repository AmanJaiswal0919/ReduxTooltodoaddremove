import { createSlice, nanoid } from "@reduxjs/toolkit";

export const b = createSlice({
    name: "todo",
  initialState: { todos: [{ id: 1, text: "Hello World" }] },
  reducers: {
    addtodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = b.actions;
export default b.reducer;