import React, { useState, useEffect } from 'react';
import { getBooks, getChapter } from './services/api';

import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import Text from './components/Text/Text';
import Chapter from './components/Chapter/Chapter';
import Mensage from './components/Mensage/Mensage';

import { Container } from './styles';
import { ThemeProvider } from "styled-components";
import { light, dark } from "./theme";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [bookAbbrev, setBookAbbrev] = useState('');
  const [bookName, setBookName] = useState('');
  const [chapter, setChapter] = useState([]);
  const [chapterArray, setChapterArray] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(dark);
  const [errorRequest, setErrorRequest] = useState('');

  useEffect(() => {
    getBooks()
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        setErrorRequest(error);
      });
  }, []);

  const getBook = (abbrev, section) => {
    setBookAbbrev(abbrev);
    getChapter(abbrev, section)
      .then(response => {
        setChapter(response.data.verses);
        setBookName(response.data.book.name);
        getNumberOfChapter(abbrev);
      })
      .catch(error => {
        setErrorRequest(error);
      });
  };

  const getNumberOfChapter = (abbrev) => {
    let book = books.find(book => book.abbrev.pt === abbrev);
    const chapterNumber = book.chapters;
    const aux = [];
    for (let i = 1; i <= chapterNumber; i++) {
      aux[i] = i;
    }
    setChapterArray(aux);
  };

  return (
    <ThemeProvider theme={selectedTheme}>
      <Header dark={dark} light={light} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />
        <Container>
        {errorRequest === '' ? (
          <>
            <BookList books={books} getBook={getBook}/>
            <Text bookName={bookName} chapter={chapter}/>
            <Chapter chapterArray={chapterArray} getBook={getBook} bookAbbrev={bookAbbrev}/>
          </>
        ) : <Mensage/>}
        </Container>
    </ThemeProvider>
  );
}

export default Main;
