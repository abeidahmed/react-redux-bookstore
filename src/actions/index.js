const addBook = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export { addBook, removeBook };
