import React, { useReducer } from 'react'

// Reducer
const reducer = (state, action) => {
  switch(action.type) {
    case 'buttonClick': return { ...state, count: state.count + 1}
    case 'setUsername': return { ...state, username: action.value}
    default: return state
  }
}

function App() {
  
  let [state, dispatch] = useReducer(reducer, {count: 0, username: ''})

  return (
    <>
      <div>
        <p>Username: {state.username}</p>
        <input type="text"
          value={state.username}
          onChange={e => dispatch({type: "setUsername", value: e.target.value}) }/>
      </div>

      <div>
        <p>Count is: {state.count}</p>
        <button
          onClick={() => dispatch({ type: "buttonClick" })}>
          Click Me
        </button>
      </div>

    </>
  )
}

export default App
