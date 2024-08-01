import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//what is we write our function here only? 
//=> it will work like this MyApp() also but not optimized.
//=> and what if we made our custom react like the down comment we can execute the object by writing only its name.

function MyApp(){
  return(
    <div>
      <h1>
        custom app
      </h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'
// }
// also will not run if direct write name to call this object bcz here the edrror is its expecting some args so need to write particular coe for those args.


//create the element by itself react only.
const anotherUser = "HEloo User"
const ReactElement = React.createElement(
  'a',{href:"https://google.com",target:"_blank"},
  "click me to visit google",
  anotherUser
)

const anotherElement=(<a href='https://googl.com'target='_blank'>Visit Google</a>)


ReactDOM.createRoot(document.getElementById('root')).render(
    //<App />
    ReactElement
    //anotherElement

  //<MyApp /> can be return also as MyApp() bcz at end its the function and in javascript.
  //</React.StrictMode>,
)
