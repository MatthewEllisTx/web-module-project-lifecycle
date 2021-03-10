import React from "react";

import UserCard from './UserCard';

export default class UserCards extends React.Component {

  state = {
    user: {},
    followers: [],
  }

  setUser = newUser => {
    this.setState({
      ...this.state,
      user: {login: newUser.login, avatar_url: newUser.avatar_url, profile: newUser.html_url, description: [ ['name', newUser.name], ['location', newUser.location], ['followers', newUser.followers], ['following', newUser.following], ['bio', newUser.bio]]},
    });
  }

  setFollowers = followers => {
    this.setState({
      ...this.state,
      followers: followers.map( follower => {return { login: follower.login, avatar_url: follower.avatar_url, profile: follower.html_url,}} ),
    });
  }

  componentDidUpdate(prevProps){
    if(this.props.nameToSearch !== prevProps.nameToSearch){
      fetch(`https://api.github.com/users/${this.props.nameToSearch}`)
        .then(response => response.json())
        .then( data => {
          this.setUser(data)
          console.log(data);
          return fetch(data.followers_url);
        })
        .then( respones => respones.json())
        .then( data => this.setFollowers(data))
        .catch( err => console.log(err))
    }
  }

  render(){
    return (
      <div>
        <h1>User</h1>
        <UserCard user={this.state.user}/>
        <h1>Friends</h1>
        {this.state.followers.map( (follower, i) => <UserCard key={i} user={follower} />)}
      </div>
    )
  }
}