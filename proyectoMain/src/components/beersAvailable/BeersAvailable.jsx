import PropTypes from 'prop-types';


const AvailableBeer = ({ beerName, beerStyle, price, available}) => {

    if (available){

    return(
        <div>
            <h2>Cerveza: {beerName} </h2>
            <p>Estilo: {beerStyle}</p>
            <p>Precio: ${price * 100}</p>
        </div>
    )
    }

}





AvailableBeer.propTypes = {
    beerName: PropTypes.string,
    beerStyle: PropTypes.string,
    price: PropTypes.number,
    available: PropTypes.bool,
}


export default AvailableBeer
