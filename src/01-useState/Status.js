import React, { useState } from 'react';

export default function Status({ onEnter }) {
  let [message, setMessage] = useState('');
  return (
    <input type="text" 
      value={message}
      onKeyUp={e => {
        if(e.key === 'Enter') {
          onEnter(message)
          setMessage('')
        }
      }}
      onChange={e => setMessage(e.target.value)}/>
  );
}
