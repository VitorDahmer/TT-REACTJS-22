import { useState } from "react";
import Nav from "./component/nav";
import "./style.css";


function App() {

  const [contador, setContador] = useState(0)

  const [ativo, setAtivo] = useState(false);
  const [dadosPessoa, setDadosPessoa] = useState({
    nome: "Vitor",
    idade: 44
  });

  const handlAtivo = () =>{
    setAtivo(!ativo);
  };

  const menor = () =>{
    if (contador !== 0) {
      setContador(contador-1);
    }
   
  };


  return (
    <div className="App"> 
      <Nav /> 
      <h1>Contador</h1>
      <h1>{contador}</h1>
      <h1>{contador*25}</h1>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
      <button onClick={menor}>Diminuir</button>
      <button onClick={handlAtivo} className={ativo?"ativo":"inativo"}>{ativo ? "Ativo" : "Inativo"}</button>
    </div>
  );
}

export default App;
