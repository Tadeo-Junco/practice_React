import './App.css'
import beers from "./components/beers/Beers"
import BeerList from './components/listBeers/ListBeers'
import AvailableBeer from './components/beersAvailable/BeersAvailable'
import ContBeer from './components/contBeers/ContBeers'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>--- Carta Completa ---</h1>
        {beers.map((beer) => (
          <BeerList
          key={beer.id} 
          beerName={beer.beerName}
          beerStyle={beer.beerStyle}
          price={beer.price}
          available={beer.available}
          />
          ) 
         )
        }

          <h1>Solo cervezas disponibles</h1>
            {beers.map((beer) => (
              <AvailableBeer
                key={beer.id}
                beerName={beer.beerName}
                beerStyle={beer.beerStyle}
                price={beer.price}
                available={beer.available}
              />
            ))}

          <h1>Red && Ipa</h1>
          <ContBeer beerlist = />
      </div>
      
    </>
  )
}

export default App
