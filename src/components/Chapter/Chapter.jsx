import React from 'react';
import {
  Grid,
  GridElement
} from './styles';

const Chapter = ({chapterArray, getBook, bookAbbrev}) => {
  return (
    <Grid>
      {chapterArray.map(chapter => (
        <GridElement onClick={() => getBook(bookAbbrev, chapter)}>{chapter}</GridElement>
      ))}
    </Grid>
  );
}

export default Chapter;
