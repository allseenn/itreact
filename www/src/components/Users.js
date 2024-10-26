import React from 'react'

class Users extends React.Component {
    users = [
      {id : 1, firstname : 'Max', lastname : 'Mustermann', age: 25, isHappy : true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'},
      {id : 2, firstname : 'Cat', lastname : 'Putt', age: 35, isHappy : true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'},
      {id : 3, firstname : 'Bob', lastname : 'Prett', age: 15, isHappy : true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'},
      {id : 4, firstname : 'Alice', lastname : 'Smith', age: 45, isHappy : false, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'},
      {id : 5, firstname : 'Dmiry', lastname : 'Volkov', age: 85, isHappy : true, bio: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam'}
    ]
    render() { 
        if(this.users.length > 0) {
      return (
        <div>
            {this.users.map(user => (
                <div key={user.id} className="user">
                    <h3>{user.firstname} {user.lastname}</h3>
                    <p>{user.bio}</p>
                    <b>{user.isHappy ? 'Happy' : 'Not happy'}</b>
                </div>
            ))}
        </div>
      )
    } else {
        return (
            <div className="user">
                <h3>No users</h3>
            </div>
        )
    }

  }
}
export default Users