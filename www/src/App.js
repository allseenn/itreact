import React from 'react'
import Header from './components/Header'
import Users from './components/Users'
import AddUser from './components/AddUser'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: 1, firstname: 'Max', lastname: 'Mustermann', age: 25, isHappy: true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam' },
        { id: 2, firstname: 'Cat', lastname: 'Putt', age: 35, isHappy: true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam' },
        { id: 3, firstname: 'Bob', lastname: 'Prett', age: 15, isHappy: true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam' },
        { id: 4, firstname: 'Alice', lastname: 'Smith', age: 45, isHappy: false, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam' },
        { id: 5, firstname: 'Dmiry', lastname: 'Volkov', age: 85, isHappy: true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam' }
      ]
    }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  helpText = 'Enter your name!'
  render() {
    return (
      <div>
        <Header title="Users list" />
        <main>
          <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    )
  }

  deleteUser(id) {
    this.setState({ users: this.state.users.filter(user => user.id !== id) })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({ users: []}, () => {
      this.setState({ users: [...allUsers] })
    })
  }
  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, { id, ...user }] })
  }

}

export default App