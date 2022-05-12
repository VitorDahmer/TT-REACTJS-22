import React from 'react';
import {Router, Route, Routes} from "react-router-dom";
import Cursos from '../pages/cursos';
import Home from '../pages/home';

// import { Container } from './styles';

function RouterNavigation() {
  return (
        <Routes>
            <Route path='/' element={<Home/>} navLink="home"/>
            <Route path='cursos' element={<Cursos/>}/>
        </Routes>
    );
};

export default RouterNavigation;