import React from 'react'
import Button from './Button'
class Header extends React.Component {
    render() { 
      return (
        <header className="header">
          <h1>{this.props.title}</h1>
          <Button />
          <Button text="Кнопка"/>
        </header>
      )
    }

  }

export default Header