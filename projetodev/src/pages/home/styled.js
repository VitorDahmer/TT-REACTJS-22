import styled from "styled-components";

export const HomeContainer = styled.div`
max-width: 1170px;
margin: 0px auto;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-between;
padding-top: 80px;
`;

export const HomeLeftAside = styled.div`
display: flex;
flex-direction: column;
align-items: left ;
justify-content: space-around;
width: 580px;
height: 300px;
margin: 20px;
`;

export const HomeSocialLink = styled.div`
width: 350px;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const HomeSocialImg = styled.img`
border: 1px solid #FF4A57;
border-radius: 50%;
:hover{
    border: 5px solid #FF4A57;
    background-color: #FF4A57;
}
`;

export const HomeH1 = styled.h1`
font-size: 58px;
`;

export const HomeH2 = styled.h2``;
export const HomeRithAside = styled.div`
margin: 70px;
`;

export const HomePersonImg = styled.img`
height: 363px;
border: 7px solid #ffffff;
border-bottom: 50px solid #ffffff;
transform: rotate(9.4deg);
:hover{
    transform: rotate(15deg);
}
`;