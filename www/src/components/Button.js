import React, { useState, useEffect } from 'react'
const Button = (props) => {
    let [click, setClick] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${click} times`
    })
    return (
        <button onClick={() => setClick(click+1)}>{props.text} {click}</button>
    )
  }

Button.defaultProps = {
  text: 'Button'
}

export default Button