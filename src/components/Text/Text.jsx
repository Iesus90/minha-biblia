import React from 'react';
import {
  ContainerTitle,
  BookName,
  ContainerText,
  Verses
} from './styles';

const Text = ({bookName, chapter}) => {
  return (
    <ContainerText>
      <ContainerTitle>
        <BookName>{bookName}</BookName>
      </ContainerTitle>
      {chapter.map(verse => (
        <Verses>{verse.number+ '. ' + verse.text}</Verses>
      ))}
    </ContainerText>
  );
}

export default Text;
