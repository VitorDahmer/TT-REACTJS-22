import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import { GetCursos } from '../../service/getCursos';
import {curso} from "../../components/Card";
import { CursosContainerCard, Container } from './styled';

function Cursos() {
    const [cursos, setCursos]= useState([]);

    const handleGetCursos = async()=>{
        const response = await GetCursos();
        console.log(response);
        setCursos(response);
    };

    useEffect(()=>{
        handleGetCursos();
    },[]);

   

  return (
      <Container>
          <h1>Cursos:</h1>
           <CursosContainerCard>
             {cursos.map((item)=>{
                return(
                    <div key={item.id}>
                         <Card curso={item}/>
                    </div>
                )
              })}
            
            
            </CursosContainerCard>


        </Container>
      
       
       
    );
};

export default Cursos;