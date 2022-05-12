import React from 'react';

import { CardContainer, CardImg } from './styled';

function Card({curso}) {
  return (
        <CardContainer>
            <CardImg src={curso.image}></CardImg>
            <h2>{curso.name}</h2>
            
        </CardContainer>
    );
}

export default Card;