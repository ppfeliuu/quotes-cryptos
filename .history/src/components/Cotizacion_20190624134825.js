import React from 'react';

const Cotizacion = ({resultado}) => {

    if (Object.keys(resultado).length === 0) return null;

    return ( 
        <div className="resultado">
            <h2>Result</h2>
            <p className="precio">Price: <span>{resultado.PRICE}</span></p>
            <p className="precio">Max Price today: <span>{resultado.HIGHDAY}</span></p>
        </div>
     );
}
 
export default Cotizacion;
    