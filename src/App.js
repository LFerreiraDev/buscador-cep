import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'

import api from './services/api';

function App(){

  const[input, setInput] = useState('')
  const[cep, setCep] = useState({})

  async function handleSearch(){
    
    if(input === ''){
      alert("Preencha o campo com o CEP")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");


    }catch{
      alert("Erro ao buscar CEP")
      setInput("")

    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e) => setInput (e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>

          <FiSearch size={25} color='white'/>

        </button>
      </div>

      

      <main className='main'>
        <h2>CEP: {cep.cep}</h2>

        <spam>{cep.logradouro}</spam>
        <spam>{cep.bairro}</spam>
        <spam>{cep.localidade} - {cep.uf}</spam>


      </main>

    </div>

  );

 }
  export default App;
