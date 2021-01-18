import React, { useContext } from 'react'
import Content from './Content'
import Sidebar from './Sidebar'
import {AppProvider} from './appContext'
function App() {
  return (

    <AppProvider>    
      <div>
        <Content />
        <Sidebar />
      </div>
    </AppProvider>
  )
}

export default App
