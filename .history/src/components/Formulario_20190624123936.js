import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Criptomoneda from './Criptomoneda';

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

    

    return(
        <form>
            <div className="row">
                <label>Choose your currency</label>
                <select 
                    className="u-full-width"
                    onChange={ e => guardarMonedaCotizar(e.target.value)}
                >
                    <option value=""> - - </option>
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
        </form>
    )

}

export default Formulario;