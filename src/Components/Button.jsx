import React from 'react'
import "./Button.css"

function Button({ content, type, handleClick }) {
  return (
    <div onClick={() => handleClick(content)} className={`button ${type || ""}`} data-testid={`${content}-button`}>
      {content}
    </div>
  )
}

export default Button
