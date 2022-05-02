import {useEffect, useState} from "react";
import Card from "../../components/Card";
import GetMovie from "../../service";
import { Button } from "./styled";


const Home = () =>{
    const [click , setClick] = useState(false);
    const [movie, setMovie] = useState([]);

    const handClick = ()=>{
        // alert("Clique Aqui!");
        setClick(!click);
    }

    const handleGetMovie = async() =>{
        const response = await GetMovie()
        console.log(response);
        setMovie(response);
    };

    useEffect(()=>{
        handleGetMovie();
    });

    return (
   <>
    <h1>Component Home</h1>
    <Button size={click} onClick={handClick}>Clique Aqui</Button>

    <Card />
    </>
    );
};

export default Home;