const addBook = (book) => ({
  type: 'CREATE_BOOK',
  payload: book,
});

const removeBook = (bookId) => ({
  type: 'REMOVE_BOOK',
  payload: bookId,
});

export { addBook, removeBook };
