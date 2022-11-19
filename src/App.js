import logo from './logo.svg'
import './App.css'
import './css/fung.css'
import { New } from "./com/New"

function App () {

  function getAlert () {
    alert("sasasa")
  }

  return (
    <div className="App">
      <div className='fung'>Fung</div>
      <New />
      <New />
      <New />
      <New />
      <button onClick={() => (getAlert())}>deed</button>
    </div>
  )
}

export default App
