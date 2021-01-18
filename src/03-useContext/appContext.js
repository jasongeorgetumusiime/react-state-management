import React, {useContext, useState} from 'react'

const AppContext = React.createContext()

export const AppProvider = ({children}) => {
  const [state, setState] = useState({})
  return <AppContext.Provider
    value={{...state, setTheme: (theme) => setState({ ...state, theme})}}
  >
    {children}
  </AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext)