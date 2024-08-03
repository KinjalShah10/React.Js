
import Sample from "./sample"

//app is just a function made.which will return the html.
function App() {
  const username = "Kinjal Shah" // expression

  return (
    <>
    <h1>HEY!!!! {username}</h1> 
    {/* evaluated expression is written in {}*/}
    <Sample/>
    </>
  )
}

export default App
