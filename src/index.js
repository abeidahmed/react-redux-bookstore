import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { v4 as uuid } from 'uuid';
import { Provider } from 'react-redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: uuid(),
      title: 'Lords of the Rings',
      category: 'Fiction',
    },
    {
      id: uuid(),
      title: 'Harry Poter',
      category: 'Fiction',
    },
    {
      id: uuid(),
      title: 'Johnny boy',
      category: 'Self-improvement',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
