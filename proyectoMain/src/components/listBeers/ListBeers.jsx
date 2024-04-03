import PropTypes from 'prop-types';


const BeerList = ({ beerName, beerStyle, price, available}) => {

    return(
        <div>
            <h2>Cerveza: {beerName} </h2>
            <p>Estilo: {beerStyle}</p>
            <p>Precio: ${price * 100}</p>
            <p>Disponible: {available}</p>
        </div>
    )

}





BeerList.propTypes = {
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool,
}

export default BeerList





