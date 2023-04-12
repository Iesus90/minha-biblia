import P from 'prop-types';
import React from 'react';
import {ContainerTitle, BookName, ContainerText, Verses} from './styles';

const Text = ({bookName, chapter}) => {
  return (
    <ContainerText>
      <ContainerTitle>
        <BookName>{bookName}</BookName>
      </ContainerTitle>
      {chapter.map(verse => (
        <Verses key={verse.number}>{verse.number + '. ' + verse.text}</Verses>
      ))}
    </ContainerText>
  );
};

Text.propTypes = {
  bookName: P.string.isRequired,
  chapter: P.array.isRequired,
};

export default Text;
