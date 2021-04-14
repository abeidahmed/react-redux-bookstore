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
          <input type="text" id="title" />
          <select>
            {categories.map((category, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
