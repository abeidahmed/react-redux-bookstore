import { v4 as uuid } from 'uuid';

const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, { id: uuid(), ...action.payload }];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
