import { useState } from 'react' // use state changes the ui in the batch wise take the whole ui as 1 batch and chnge the whole.

function App() {

// used to change the ui in the react use state takes one value as a default in it.
  let[counter,setCounter] = useState(5) //counter is the value before the change when the value is changed the set counter updates the value.
  if (counter < 0)  ;
  if (counter > 20) ;

  

  //let counter = 5;
  const Add_value= () =>{
    if (counter == 20)  {
      return counter;
    }
    //counter=counter + 1
    setCounter(counter+1)
    //console.log("clicked",Math.random)
}
  const Remove_value= () =>{
    //counter=counter - 1
    if (counter == 0)  {
      return counter;
    }
    setCounter(counter-1);
    
    //console.log("clicked",Math.random)
}
  

  return (
    <>
      <h1>Hello Jiii</h1>
      <h2>counter value: {counter} </h2>

      <button onClick={Add_value}>Add Value = {counter} </button><br>
      </br>
      <button onClick={Remove_value}>Remove Value = {counter} </button>

      <p>footer:{counter}</p>
    </>
  )
}

export default App
