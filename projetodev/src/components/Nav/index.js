import React from 'react';
import Logo from "../../assets/logotipo.png";

import { NavContainer, LogoImg, MenuContainer, LinkPage, HeaderContainer } from './styled';

function Nav() {
  return (
      <HeaderContainer>
          <NavContainer>
            <LogoImg src={Logo}></LogoImg>
           
            <MenuContainer>
                <LinkPage to="/">Home</LinkPage>
                <LinkPage to="cursos">Cursos</LinkPage>
                <LinkPage to="/">Contato</LinkPage>
            </MenuContainer>
           </NavContainer>
        </HeaderContainer>
        
    );
}

export default Nav;