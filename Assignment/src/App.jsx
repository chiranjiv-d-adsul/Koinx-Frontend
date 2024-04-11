import { useState } from 'react'
// import NavBar from './components/NavBar'
import Bitcoin from './Pages/Bitcoin'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <NavBar/> */}
   <Bitcoin/>
    </>
  )
}

export default App
