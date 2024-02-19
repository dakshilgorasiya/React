import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <h1>Another Element</h1>
)


const newUser = "dakshil"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'click me to visit google',
  newUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
  // <App />
)
