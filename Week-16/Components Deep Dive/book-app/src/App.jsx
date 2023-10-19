import React from 'react';
import './App.css';
import BookList from './components/BookList';
import WithLogging from './components/WithLogging';

const books = [
  { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Genre 1' },
  { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Genre 2' }
  // Add more books as needed
];

const BookListWithLogging = WithLogging(BookList);

function App() {
  return (
    <div className="App">
      <h1>Book App</h1>
      <BookListWithLogging books={books} />
      {/* Example usage of BookDetail component */}
      {/* <BookDetail book={books[0]} /> */}
    </div>
  );
}

export default App;
