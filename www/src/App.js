import React from 'react'
import Header from './components/Header'
import Img from './components/Img'
import logo from './img/01.png'
  
  class App extends React.Component {
    constructor(props) { 
        super(props)
        this.state = { 
            helpText: 'Help text',
            userData: ''
             }
        this.mouseEnter = this.mouseEnter.bind(this)
    }

    componentDidUpdate(prevProp) {
        if(this.state.helpText !== "Help") {
            console.log('Changed');
        }
    }

    helpText = 'Enter your name!'
    render() {
      return (
        <div>
          <Header title="Шапка сайта"/>
          <h1>{this.state.helpText}</h1>
          <h2>{this.state.userData}</h2>
          <input placeholder={this.state.helpText} 
          onChange={event => this.setState({userData: event.target.value})}
          onMouseEnter={this.mouseEnter} 
          onMouseLeave={this.mouseLeave} />
          <p>{this.state.helpText === 'Enter your name' ? 'Yes' : 'No'}</p>
          <Img src={logo} alt="logo" />
        </div>
      )
    }
    mouseEnter() { 
        this.setState({ helpText: 'Changed' }) 
        console.log('onmouseenter') }
    mouseLeave() { console.log('onmouseleave') }
  }

  export default App