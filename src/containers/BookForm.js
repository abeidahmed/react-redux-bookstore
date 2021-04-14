import { v4 as uuid } from 'uuid';

const BookForm = () => {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  return (
    <div>
      <form>
        <div>
          <input type="text" id="title" autoComplete="off" />
          <select>
            {categories.map((category) => (
              <option value={category} key={uuid()}>
                {category}
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
