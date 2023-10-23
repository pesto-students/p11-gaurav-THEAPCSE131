import React, { Component } from 'react';
import Book from './Book'; // Assuming Book component is in a separate file

class BookList extends Component {
  render() {
    const { books } = this.props;
    return (
      <div>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    );
  }
}

export default BookList;
