import { useState } from 'react'
import './App.css'
import Auth from './Components/Auth';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Auth/>
    </>
  )
}

export default App;
