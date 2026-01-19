import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { useCallback } from 'react'
 

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  let passwordGenerator = useCallback(()=>{
    
  let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowed) str += '0123456789'
  if(charAllowed) str += '~!@#$%^&*()_+{}:<>?/><,\|`"'
  
  for(let i = 0; i< length; i++){
   let char =   Math.floor(Math.random()* str.length)
   pass += str[char]
  //  pass += str.charAt(char)

  }
  setPassword(pass)
  
}, [numberAllowed])

useEffect(() =>{
  passwordGenerator()

}, [passwordGenerator,  numberAllowed])

  return (
    <>
        <input type="text" value={password} readOnly/>

        <input type="checkbox" name="numberAllowed" id="" checked = {numberAllowed} 
        onChange={() =>
          setNumberAllowed(prev => !prev)
        } />


     </>
  )
}

export default App
