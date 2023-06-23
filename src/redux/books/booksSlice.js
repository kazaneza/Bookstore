/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const bookData = action.payload;
      state.books = [...state.books, bookData];
    },

    removeBook: (state, action) => {
      const idOfBookToRemove = action.payload;
      state.books = state.books.filter(
        (book) => book.item_id !== idOfBookToRemove,
      );
    },
  },
});

export const booksActions = booksSlice.actions;
export default booksSlice.reducer;
