import { Link } from "react-router-dom";
import styled from "styled-components";


export const HeaderContainer = styled.div`
height: 110px;
width: 100%;
background-color: #1F2235;

`;
export const NavContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 110px;

max-width: 1170px;
margin: 0px auto;
`;
export const LogoImg = styled.img`
width: 103px;
margin: 26px;
`;
export const MenuContainer = styled.div`
display: flex;
justify-content: space-around;
width: 350px;
`;

export const LinkPage = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
width: 94px;
height: 50px;
border: solid 2px yellow;
text-decoration: none;
color: #ffffff;
:hover{
    background-color: #3B3D5D;
}
`;