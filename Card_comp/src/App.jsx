import { useState } from 'react'
import Card from './component_1/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Kinjal",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Influencerssss" btnText="click me" />
      <Card username="kinjal" />
    </>
  )
}

export default App