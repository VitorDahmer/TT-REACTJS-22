import React from 'react';
import Vitor2 from "../../assets/Vitor2.jpg";
import Likedin from "../../assets/logo-linkedin.png";
import FaceBook from "../../assets/logo-facebook.png";
import Twitter from "../../assets/logo-twitter.png";
import Instagram from "../../assets/logo-twitter.png";

import { HomeContainer, HomeH1, HomeH2, HomeLeftAside, HomePersonImg, HomeRithAside, HomeSocialImg, HomeSocialLink } from './styled';

function Home() {
  return (
      
        <HomeContainer>
            <HomeLeftAside>
                <HomeSocialLink>
                    <HomeSocialImg src={Likedin}></HomeSocialImg>
                    <HomeSocialImg src={FaceBook}></HomeSocialImg>
                    <HomeSocialImg src={Twitter}></HomeSocialImg>
                    <HomeSocialImg src={Instagram}></HomeSocialImg>
                    
                </HomeSocialLink>
                
                <HomeH1>Vitor Cristiano Dahmer</HomeH1>
                <HomeH2>Sou desenvolvedor front-end com conhecimentos em HTML(5), CSS(3), JavaScript e React.</HomeH2>
            </HomeLeftAside>
            <HomeRithAside>
                <HomePersonImg src={Vitor2}></HomePersonImg>
            </HomeRithAside>
        </HomeContainer>
    );
}

export default Home;