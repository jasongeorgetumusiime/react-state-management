import { useEffect, useState } from "react"

export const useStorage = (key, initialState) => {
  // Hook does not consider the initial state
  // localStorage blocks the main thread
  let [state, setState] = useState(initialState)

  useEffect(() => {
    let existingState = localStorage.getItem(key)
    if(existingState) setState(JSON.parse(existingState))
  }, [key])

  return [state, state => {
    setState(state)
    // localStorage blocks the main thread
    localStorage.setItem(key ,JSON.stringify(state))
  }]
}