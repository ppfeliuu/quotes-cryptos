import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';
import Error from './Error';

function Formulario() {

    const [criptomonedas, guardarCriptomonedas] = useState([]);
    const [monedaCotizar, guardarMonedaCotizar] = useState('');
    const [criptoCotizar, guardarCriptoCotizar] = useState('');
    const [error, guardarError] = useState(false);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const resultado = await axios(url);

            console.log(resultado.data.Data);

            guardarCriptomonedas(resultado.data.Data);
        }

        consultarAPI();
    }, []);

    
    const cotizarMoneda = e => {
        e.preventDefault();


        //validar
        if (monedaCotizar === '' || criptoCotizar === '') {
            guardarError(true)
            return;
        }

        // pasamos los valores
        guardarError(false);
        
    }

    //Mostrar error

    const componente = (error) ? <Error mensaje="All fields are required"/> : null;

    return(
        <form
            onSubmit={cotizarMoneda}
        >
            {componente}
            <div className="row">
                <label>Choose your currency</label>
                <select 
                    className="u-full-width"
                    onChange={ e => guardarMonedaCotizar(e.target.value)}
                >
                    <option value="">Select a currency</option>
                    <option value="USD">Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Pound</option>
                </select>
            </div>
            <div className="row">
                <label>Choose your cryptocurrency</label>
                <select 
                    onChange={ e => guardarCriptoCotizar(e.target.value)}
                    className="u-full-width">
                    <option value="">Select a cryptocurrency</option>
                    {criptomonedas.map(criptomoneda => (
                        <Criptomoneda
                            key={criptomoneda.CoinInfo.Id}
                            criptomoneda={criptomoneda}
                        />
                    ))}
                </select>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Send" />
        </form>
    )

}

export default Formulario;