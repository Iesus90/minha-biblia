import React from 'react';
import {
  List,
  ListItem
} from './styles';

const BookList = ({books, getBook}) => {
  return (
    <List>
      {books.map(item => (
        <li key={item.id}>
          <ListItem onClick={() => getBook(item.abbrev.pt, 1)}>{item.name}</ListItem>
        </li>
      ))}
    </List>
  );
}

export default BookList;
