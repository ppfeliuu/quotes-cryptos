import React from 'react';

const Cotizacion = ({resultado}) => {

    if (Object.keys(resultado).length === 0) return null;

    return ( 
        <div className="resultado">
            <h2>Result</h2>
            <p className="precio">Price: <span>{resultado.PRICE}</span></p>
            <p className="precio">Max Price today: <span>{resultado.HIGHDAY}</span></p>
            <p className="precio">Min Price today: <span>{resultado.LOWDAY}</span></p>
            <p className="precio">Variation 24H: <span>{resultado.CHANGEPCT24HOUR}</span></p>
            <p className="precio">Last update: <span>{resultado.LASTUPDATE}</span></p>
        </div>
     );
}
 
export default Cotizacion;
    