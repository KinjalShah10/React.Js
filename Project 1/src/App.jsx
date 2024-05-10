import { useState } from 'react'

import './App.css'

function App() {

// used to change the ui in the raect
  let[counter,setCounter] = useState(5)

  //let counter = 5;
  const Add_value= () =>{
    //counter=counter + 1
    setCounter(counter+1)
    //console.log("clicked",Math.random)
}
  const Remove_value= () =>{
    //counter=counter - 1
    setCounter(counter-1)
    //console.log("clicked",Math.random)
}
  

  return (
    <>
      <h1>Hello Jiii</h1>
      <h2>counter value: 5 </h2>

      <button onClick={Add_value}>Add Value {counter}</button><br>
      </br>
      <button onClick={Remove_value}>Remove Value {counter}</button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App
