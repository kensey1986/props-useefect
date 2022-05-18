import { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { Body } from './components/Body'

function App() {
    const [data, setData] = useState([])
  // const saludo = () =>{
  //    console.log('saludando')
  // }
  useEffect(
    () => { 
      setData([ 1, 5 , 6]
      )
    },[]
  )
  
  return (
    <div className="App">
     <Body
      data={data}
     />

    </div>
  )
}

export default App
