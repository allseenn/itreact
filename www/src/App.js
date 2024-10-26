import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
  
  class App extends React.Component {


    helpText = 'Enter your name!'
    render() {
      return (
        <div>
            <Header title="Users list" />
            <main>
                <Users />
            </main>
            <aside></aside>
        </div>
      )
    }
  }

  export default App