import React, { PureComponent } from 'react';

class Book extends PureComponent {
  render() {
    const { book } = this.props;
    return (
      <div>
        <h2>{book.title}</h2>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
      </div>
    );
  }
}

export default Book;
