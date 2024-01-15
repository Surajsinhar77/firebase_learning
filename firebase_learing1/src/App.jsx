import { useState } from 'react'
import './App.css'
import Auth from './Components/Auth';
import RoutesAll from './common/RoutesAll';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutesAll/>
    </>
  )
}

export default App;
