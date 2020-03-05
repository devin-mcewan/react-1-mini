import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: "",
      name: ""
    };
  }

  updatePicture(value) {
    this.setState({ picture: value });
  }

  updateName(value) {
    this.setState({ name: value });
  }

  addFriend() {
    let newFriendsArray = [...this.state.friends];
    newFriendsArray.push({
      picture: this.state.picture,
      name: this.state.name
    });
    this.setState({ friends: newFriendsArray, picture: "", name: "" });
  }

  render() {
    const friends = this.state.friends.map((friend, i) => {
      return (
        <div key={i}>
          <img src={friend.picture} alt={friend.name} />
          <span>{friend.name}</span>
        </div>
      );
    });
    return (
      <div>
        Picture:{" "}
        <input
          onChange={e => this.updatePicture(e.target.value)}
          value={this.state.picture}
        />{" "}
        Name:{" "}
        <input
          onChange={e => this.updateName(e.target.value)}
          value={this.state.name}
          onKeyPress={e => {
            if (e.keyCode === 13) {
              this.addFriend();
            }
          }}
        />
        <button onClick={() => this.addFriend()}>Add Friend</button>
        {friends}
      </div>
    );
  }
}

export default App;
