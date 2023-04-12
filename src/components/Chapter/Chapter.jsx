import P from 'prop-types';
import React from 'react';
import {Grid, GridElement} from './styles';

const Chapter = ({chapterArray, getBook, bookAbbrev}) => {
  return (
    <Grid>
      {chapterArray.map(chapter => (
        <GridElement key={chapter.id} onClick={() => getBook(bookAbbrev, chapter)}>
          {chapter}
        </GridElement>
      ))}
    </Grid>
  );
};

Chapter.propTypes = {
  chapterArray: P.array.isRequired,
  getBook: P.func.isRequired,
  bookAbbrev: P.string.isRequired,
};

export default Chapter;
