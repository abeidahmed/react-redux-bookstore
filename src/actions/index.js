const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  payload: book,
});

export default { addBook, removeBook };
