import React from 'react';

function Formulario() {

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