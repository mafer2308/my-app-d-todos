import { useState } from 'react'

import './App.css'
import ToDos from './component/ToDos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ToDos />
  
    </div>
  )
}

export default App
