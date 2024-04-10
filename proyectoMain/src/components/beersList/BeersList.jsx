import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BeersList = ({ beers }) => {
  return (
    <div  className="beer">
        <Card style={{ width: '18rem' }}>
            {beers.map((beer) =>(
                <div key = {beer.id}>
                    <Card.Body>
                        <Card.Title><h3>{beer.beerName}</h3></Card.Title>
                        <Card.Text>
                            <p>Estilo: {beer.beerStyle}</p>
                            <h5>Precio: ${beer.price * 1000}</h5>
                            <p>{beer.available ? "Disponible" : "No Disponible"}</p>
                        </Card.Text>
                        <Button variant="primary">Ver Info</Button>
                    </Card.Body>                    
                </div>
            ))}
        </Card>
    </div>    
  )
}

BeersList.propTypes = {
    beers: PropTypes.array
};



export default BeersList;
