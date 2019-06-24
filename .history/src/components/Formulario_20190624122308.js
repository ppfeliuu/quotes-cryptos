import React, { useEffect } from 'react';
import axios from 'axios';

function Formulario() {

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

            const resultado = await axios(url);

            console.log(resultado);
        }
    }, []);

    return(
        <form>
            <div className="row">
                <label>Choose your currency</label>
                <select className="u-full-width">
                    <option value=""> - - </option>
                    <option value="USD">Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Pound</option>
                </select>
            </div>
            <div className="row">
                <label>Choose your cryptocurrency</label>
                <select className="u-full-width">

                </select>
            </div>
        </form>
    )

}

export default Formulario;