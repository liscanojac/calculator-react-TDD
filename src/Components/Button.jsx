import React from 'react'
import "./Button.css"

function Button({ content, type, dispatch, action }) {

  // console.log(content)
  return (
    <div 
      onClick={() => dispatch({ type: action, payload: content })} 
      className={`button ${type || ""}`} 
      data-testid={`${content}-button`}
    >
      {content}
    </div>
  )
}

export default Button
