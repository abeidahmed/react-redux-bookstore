import Book from '../components/Book';

const BooksList = () => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <Book />
    </tbody>
  </table>
);

export default BooksList;
