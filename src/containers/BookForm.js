import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBook } from '../actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ title: '', category: categories[0] });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook(data));
    setData({ title: '', category: categories[0] });
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            autoComplete="off"
            name="title"
            onChange={handleChange}
          />
          <select name="category" value={data.category} onChange={handleChange}>
            {categories.map((cat) => (
              <option value={cat} key={uuid()}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Submit book</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
