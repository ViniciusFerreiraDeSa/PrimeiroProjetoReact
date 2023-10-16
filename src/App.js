import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/rodape/index.js';


function App() {

  const times = [
    {
      nome:'Mugiwaras',
      corPrimaria: '#E90909',
      corSecundaria: '#D3C910',
    },
    {
      nome: 'Piratas Feras',
      corPrimaria: '#7302B5',
      corSecundaria: '#5D4FC2',
    },
    {
      nome: 'Piratas Heart',
      corPrimaria: '#020202',
      corSecundaria: '#FFEA00',
    },
    {
      nome: 'Piratas Big Mom',
      corPrimaria: '#F131C1',
      corSecundaria: '#C68EB5',
    },
    {
      nome: 'Piratas Kid',
      corPrimaria: '#FF0000',
      corSecundaria: '#5B5C5D',
    },
    {
      nome: 'Piratas Buggy',
      corPrimaria: '#FF0000',
      corSecundaria: '#1057F1',
    },
    {
      nome: 'Marinha',
      corPrimaria: '#4B0FFF',
      corSecundaria: '#FFFFFF',
    },
  ]

  const [tripulantes, setTripulantes] = useState([])

  const novaTripulacaoAdicionada = (tripulacao) =>{
    setTripulantes([...tripulantes, tripulacao])
  }
  return (
    <div className="App">
      <Banner/>
      <Formulario nomeDosTimes={times.map(time => time.nome)} tripulacaoCadastrada={tripulacao => novaTripulacaoAdicionada(tripulacao)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corBarra={time.corPrimaria} 
      corFundo={time.corSecundaria}
      tripulantes={tripulantes.filter(tripulante => tripulante.tripulacao === time.nome)}
      />)}
     <Rodape/>
    </div>
    
  );
}

export default App;
