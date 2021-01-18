import React, { useState } from 'react'
import Status from './Status'
const App = () => {
  
  let [messages, setMessages] = useState(['test', 'test1'])
  return (
    <div>
      <Status onEnter={value => setMessages([...messages, value])}></Status>
      <ul>
        {messages.map((message, index) => 
          <li key={index}> {message} </li> )}
      </ul>
    </div>
  )
}

export default App