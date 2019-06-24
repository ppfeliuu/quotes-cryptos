import React from 'react';

function Formulario() {

    return(
        <form>
            <div className="row">
                <label>Choose your currency</label>
                <select>
                    <option value=""> - - </option>
                    <option value="USD">Dollar</option>
                    <option value="EUR">Euro</option>
                    <option value="GBP">Pound</option>
                </select>
            </div>
            <div className="row">
                <label>Choose your cryptocurrency</label>
                <select>

                </select>
            </div>
        </form>
    )

}

export default Formulario;