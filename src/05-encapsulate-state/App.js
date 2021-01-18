import React, { useState } from 'react'
import { usePicture } from './usePicture'

function App() {
  const [date, setDate] = useState('2020-05-05')
  const picture = usePicture(date)
  console.log(picture)
  if (!picture) return <div>Loading...</div>

  return (
    <div>
      <input type="date" onChange={e => setDate(e.target.value)}/>
      <h3>{picture.title}</h3>
      <div>{picture.explanation}</div>
      <img src={picture.url} alt={picture.title} />
    </div>
  )
}

export default App
