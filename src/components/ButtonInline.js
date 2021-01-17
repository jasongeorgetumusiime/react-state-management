import React from 'react'

const ButtonInline = ({ onClick, children }) => (
  <button
    type="button"
    className="button-inline"
    onClick={() => onClick()}
  >
    {children}
  </button>
)

export default ButtonInline