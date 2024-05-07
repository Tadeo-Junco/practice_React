import './App.css'
import beers from './components/beers/Beers'
import BeersList from './components/beersList/BeersList'
import ChangeDolar from './components/changeDolar/ChangeDolar'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <ChangeDolar/>
      </div>
      <div className='content-beer'>
        <BeersList beers = {beers}/>
      </div>
    </div>
  )
}

export default App
