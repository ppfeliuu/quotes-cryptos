import React from 'react';

const Cotizacion = ({resultado}) => {

    if (Object.keys(resultado).length === 0) return null;

    return ( 
        <div className="resultado">
            <h2>Result</h2>
            <p className="precio">Price: <span>{resultado.PRICE}</span></p>
            <p>Max Price today: <span>{resultado.HIGHDAY}</span></p>
            <p>Min Price today: <span>{resultado.LOWDAY}</span></p>
            <p>Variation 24H: <span>{resultado.CHANGEPCT24HOUR} %</span></p>
            <p>Last update: <span>{resultado.LASTUPDATE}</span></p>
        </div>
     );
}
 
export default Cotizacion;
    