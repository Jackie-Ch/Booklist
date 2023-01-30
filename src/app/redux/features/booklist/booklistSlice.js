import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../../initialState.js";

export const booklistSlice = createSlice({
  name: "booklist",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.data.unshift(action.payload);
    },
    deleteBook: (state, action) => {
      state.data = state.data.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action) => {
      state.showEditForm = true;
      const [objForEdit] = state.data.filter(
        (book) => book.id === action.payload
      );
      state.newEditForm = objForEdit;
    },
    showEditForm: (state, action) => {
      state.showEditForm = action.payload;
    },
    saveChangesEditedForm: (state, action) => {
      const finedIntexBook = state.data.findIndex((book) => {
        return book.id === action.payload.id;
      });
      state.data.splice(finedIntexBook, 1, action.payload);
      state.showEditForm = false;
    },
  },
});
export const {
  addBook,
  deleteBook,
  editBook,
  showEditForm,
  saveChangesEditedForm,
} = booklistSlice.actions;

export default booklistSlice.reducer;
