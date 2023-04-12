import P from 'prop-types';
import React from 'react';
import {HeaderContainer, HeaderContent, HeaderNav, Bible, IconButton} from './styles';

const Header = ({dark, light, selectedTheme, setSelectedTheme}) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderNav>
          <Bible>Minha Bíblia</Bible>
          <IconButton onClick={() => (selectedTheme === dark ? setSelectedTheme(light) : setSelectedTheme(dark))} />
        </HeaderNav>
      </HeaderContent>
    </HeaderContainer>
  );
};

Header.propTypes = {
  dark: P.bool.isRequired,
  light: P.bool.isRequired,
  selectedTheme: P.object.isRequired,
  setSelectedTheme: P.func.isRequired,
};

export default Header;
