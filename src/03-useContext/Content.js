import React from 'react'
import { useAppContext } from './appContext'

function Content() {
  let { theme } = useAppContext()
  return (
    <div style={{ color: theme === 'dark' ? 'black' : 'red' }}>
      Here is our main content
    </div>
  )
}

export default Content