import { useState } from 'react'
import Fortune from './components/Fortune'
import FortuneTitle from './components/FortuneTitle'
import './App.css'
import phrases from './data/phrases.json'

function App() {
  const fondos = [1,2,3,4];
  const [num, setNum] = useState(0);
  const [indexPhrases, setIndexPhrases,ramdon] = useState(0)
  const changeFondo = () => {
    if (num === fondos.length -1) {
      setNum(0);
    } else{
      setNum(num +1);
    }
  }
  const changeFortuna = () => {
    setIndexPhrases(Math.floor(Math.random() * phrases.length))
  }

  return (
    <div className="App"style={{backgroundImage:"url('fondo"+fondos[num]+".jpg')"}}  > 
      <FortuneTitle /> 
      <Fortune 
          FortuneData= {phrases[indexPhrases] }
      />
      <button className='button' onClick={ () =>{changeFortuna(), changeFondo()} }>
        Ver Otro
      </button>   
    </div>
  )
}

export default App
