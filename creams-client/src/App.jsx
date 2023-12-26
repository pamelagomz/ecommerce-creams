import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Shop from './components/shop/Shop'
import NavBar from './components/navbar/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <NavBar/>
      <Shop/>
      </div>
     
    </>
  )
}

export default App
