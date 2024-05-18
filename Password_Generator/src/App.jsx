import { useState, useCallback, useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charactersAllowed,setCharatersAllowed] = useState(false);
  const [Password,setPassword]= useState("")

//useRef hook 
const PasswordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
    let pass= ""
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charactersAllowed) str += "!@#$%^&*"

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)

      
    }

    setPassword(pass)
  },[length,numberAllowed,charactersAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    PasswordRef.current?.select();
    PasswordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(()=>{
    passwordGenerator()

  },
    [length,numberAllowed,charactersAllowed,passwordGenerator]
  )

 
 
 
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-medium rounded-lg px-4 py-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type='text'
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={PasswordRef}
        ></input>
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'> 
        <input type="range" 
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setLength(e.target.value)

        }}

         />
         <label>Length:{length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev) => !prev);
          }}

          
           />
           <label htmlFor="numberInput"> Numbers</label>

        </div>
        <div
        className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charactersAllowed}
        id="charactersInput"
        onChange={()=>{
          setCharatersAllowed((prev) => !prev);
        }}

        
         />
         <label htmlFor="numberInput">Characters</label>

        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
