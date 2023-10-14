import { FiSearch } from 'react-icons/fi'
import './styles.css'

function App(){
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite seu CEP"
        />

        <button className="buttonSearch">

          <FiSearch size={25} color='white'/>

        </button>
      </div>

      <main className='main'>
        <h2>CEP: 78965214</h2>

        <spam>Rua: alguma rua</spam>
        <spam>Complemento: algum complemento</spam>
        <spam>Bairro: algum bairro</spam>
        <spam>Goiania - GO</spam>


      </main>

    </div>

  );

 }
  export default App;
