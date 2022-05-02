import { useState } from "react";
import Button from "./componets/button";
import Input from "./componets/input";


function App() {
  const [name, setName]= useState("");
  const [email, setEmail]= useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      email: email
    };

    handleSubmitUser(data);

    console.log(data);
    
  }

  const handleSubmitUser = async (user) =>{
    const response = await fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/user", 
    {
      method: "POST",
      headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }
    );
    const data = await response.json();
    console.log("teste",data);
  }

  return (
    <div className="App">
     <h1>Inputs</h1>
     <form onSubmit={handleSubmit}>
       {/* <label htmlFor="name">Nome: </label>
       <input 
       type="text"
       id="name"
       value={name}
       onChange={(event) => setName(event.target.value)}
       ></input>
       {name}
       <label htmlFor="email"> E-mail</label>
       <input
       type="email"
       id="email"
       value={email}
       onChange={(event)=> setEmail(event.target.value)}
       ></input> */}

       <Input 
       id="name" 
       label="Nome"
       placeholder="Informe seu nome"
       type="text" 
       value={name} 
       setValue={setName} />

       <Input
        id="email" 
        label="email"
        placeholder="Escreve seu e-mail"
        type="email" 
        value={email} 
        setValue={setEmail}/>

        <Button>Enviar</Button>

       {/* <button>Enviar</button> */}
     </form>
    </div>
  );
}

export default App;
