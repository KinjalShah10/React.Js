import { useState } from 'react' // use state changes the ui in the batch wise take the whole ui as 1 batch and chnge the whole.

function App() {

// used to change the ui in the react use state takes one value as a default in it.
  let[counter,setCounter] = useState(5) //counter is the value before the change when the value is changed the set counter updates the value.

  //let counter = 5;
  const Add_value= () =>{
    if (counter == 20)  {
      return counter;
    }
    //counter=counter + 1
    setCounter(counter+1)
    //console.log("clicked",Math.random)
    //what is the interviewer says that
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // Will it be increased directly to 19 ? => no bcz set counter or any method takes the changes in ui in the form of batches so it will see that the changes done are same so will increase only one time.
    //what if we want to increase by 4?
    // than we need to pass it in the call back function bcz internally if we see than all this methods are taking the call back functions.
    //so will do 
    //setCounter(prevCounter => prevCounter +1)
    //setCounter(prevCounter => prevCounter +1)
    //setCounter(prevCounter => prevCounter +1)
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
