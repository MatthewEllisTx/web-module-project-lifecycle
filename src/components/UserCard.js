import { render } from "@testing-library/react";
import React from "react";

export default class UserCard extends React.Component {
  render(){
    return (
      <div>
        <img src={this.props.user.avatar_url} alt={`${this.props.user.login}'s profile pic`}/>
        <div>
          <h3>{this.props.user.login}</h3>
          {this.props.user.description !== undefined && <div>{this.props.user.description.map( (arr, i) => <p key={i}>{arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + ': ' + arr[1]}</p>)}</div>}
        </div>
      </div>
    )
  }
}