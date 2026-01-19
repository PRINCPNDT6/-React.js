import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'prince',
    age: '21'
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4
      rounded-xl '>Tailwindcss--</h1>

 <Card name = "prince" btnText = "click Me" someObj = {myObj} someArr = {myArr}/>
 <Card name = "sharma" btnText='Lets go' />
    </>
  )
}

export default App
