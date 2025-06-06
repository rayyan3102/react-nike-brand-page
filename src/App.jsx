import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Main />
    </div>
  )
}

export default App
