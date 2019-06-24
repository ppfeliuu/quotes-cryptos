import React, { useState, useEffect } from 'react';
import imagen from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Spinner from './components/Spinner';

function App() {

  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [cargando, guardarCargando] = useState(false);


  useEffect(() => {
    const cotizarCriptomoneda = async () => {

        if (moneda === '' || criptomoneda === '') return;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

        const resultado = await axios.get(url);

        console.log(resultado);

        guardarCargando(true);

        setTimeout(() => {
          guardarCargando(false);
        }, 3000);
    }

    cotizarCriptomoneda();
  }, [criptomoneda, moneda]);

  // Show spinner or result
  const componente = (cargando) ? <Spinner />: null;

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="Crypto" className="logotipo"/>
        </div>
        <div className="one-half column">
          <h1>Quote your cryptocurrency</h1>
          <Formulario 
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />
          {componente}
        </div>
      </div>
    </div>
  );
}

export default App;
