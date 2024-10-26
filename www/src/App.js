import React from 'react'
import Header from './components/Header'
import Img from './components/Img'
import logo from './img/01.png'
  
  class App extends React.Component {
    helpText = 'Enter your name!'
    render() {
      return (
        <div>
          <Header title="Шапка сайта"/>
          <h1>{this.helpText}</h1>
          <input placeholder={this.helpText} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} />
          <p>{this.helpText === 'Enter your name' ? 'Yes' : 'No'}</p>
          <Img src={logo} alt="logo" />
        </div>
      )
    }
    mouseEnter() { console.log('onmouseenter') }
    mouseLeave() { console.log('onmouseleave') }
  }

  export default App