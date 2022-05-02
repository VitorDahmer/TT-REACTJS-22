import { useEffect, useState } from "react";
import { CardMovie } from "./components/cardMovie";
import "./global/style-app.css";



function App() {
  const [contador, setContador]=useState(0);
  const [filmes, setFilmes]= useState([]);

  const buscaValor = async() =>{
    const response = await fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks");
    const data = await response.json();
    setFilmes(data);
    console.log(filmes);
  };

  buscaValor();

  useEffect(()=> {
    console.log("Rodei sem []");
  });

  useEffect(()=>{
    console.log("Rodei com []");
  },[]);

  useEffect(()=>{
    console.log("Rodei o contador");
  },[contador]);

  useEffect(()=>{
    buscaValor();
  },[]);

  return (
    <div className="App">
     <h1>Target</h1>
     {contador}
     <button onClick={() => setContador(contador +1)}>Soma</button>
     <button onClick={() => setContador(contador - 1)}>Diminui</button>

    
    <div className="container-app">
      {filmes.map((item) => {
         
         return <CardMovie movie={item}/>
       })}
    </div>
    
    </div>
  );
}

export default App;
