import React from "react";

import UserCard from './UserCard';

export default class UserCards extends React.Component {

  state = {
    user: {},
    followers: [],
    error: '',
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

  setError = error => {
    this.setState({
      ...this.state,
      error: error
    })
  }

  componentDidUpdate(prevProps){
    if(this.props.nameToSearch !== prevProps.nameToSearch){
      document.body.style.cursor = 'wait';
      fetch(`https://api.github.com/users/${this.props.nameToSearch}`)
        .then(response => response.json())
        .then( data => {
          this.setUser(data)
          console.log(data);
          this.setError('')
          return fetch(data.followers_url);
        })
        .then( respones => respones.json())
        .then( data => this.setFollowers(data))
        .catch( err => this.setError(`Could not find user with login ${this.props.nameToSearch}`))
      document.body.style.cursor = 'pointer';
    }
  }

  render(){
    return (
      <div>
        {this.state.error !== '' && <h1>{this.state.error}</h1>}
        {(this.props.nameToSearch !== '' && this.state.error === '') &&
        <div>
          <h1>User</h1>
          <UserCard user={this.state.user}/>
          <h1>Friends</h1>
          {this.state.followers.map( (follower, i) => <UserCard key={i} user={follower} />)}
        </div>}
      </div>
    )
  }
}