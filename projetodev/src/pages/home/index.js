import React from 'react';
import Vitor2 from "../../assets/Vitor2.jpg";
import Likedin from "../../assets/logo-linkedin.png";
import FaceBook from "../../assets/logo-facebook.png";
import Twitter from "../../assets/logo-twitter.png";
import Instagram from "../../assets/logo-instagram.png";

import { HomeContainer, HomeH1, HomeH2, HomeLeftAside, HomePersonImg, HomeRithAside, HomeSocialImg, HomeSocialLink } from './styled';

function Home() {
    return (

        <HomeContainer>
            <HomeLeftAside>
                <HomeSocialLink>
                    <a href='https://www.linkedin.com/in/vitor-cristiano-dahmer-1774394a/' target="_blank"><HomeSocialImg src={Likedin}></HomeSocialImg></a>
                    <a href='https://www.linkedin.com/in/vitor-cristiano-dahmer-1774394a/' target="_blank"><HomeSocialImg src={FaceBook}></HomeSocialImg></a>
                    <a href='https://www.linkedin.com/in/vitor-cristiano-dahmer-1774394a/' target="_blank"><HomeSocialImg src={Twitter}></HomeSocialImg></a>
                    <a href='https://www.linkedin.com/in/vitor-cristiano-dahmer-1774394a/' target="_blank"><HomeSocialImg src={Instagram}></HomeSocialImg></a>




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