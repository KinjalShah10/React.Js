import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

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
