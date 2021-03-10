import React from "react";
import styled from 'styled-components';

const DivMain = styled.div`
  border: 1px solid #808080;
  border-radius: 10px;
  box-shadow: 0 0 3px #808080;
  cursor: pointer;
  display: flex;
  margin: 20px auto;
  overflow: hidden;
  width: 500px;
`

const ImgProfile = styled.img`
  height: 171px;
  width: 171px;
`

const DivWords = styled.div`
  display: inline-block;
  padding: 10px;
  text-align: left;
`

export default class UserCard extends React.Component {

  onClick = () => {
    this.props.setNameToSearch(this.props.user.login);
  }

  render(){
    return (
      <DivMain onClick={this.onClick}>
        <ImgProfile src={this.props.user.avatar_url} alt={`${this.props.user.login}'s profile pic`}/>
        <DivWords>
          <h3>{this.props.user.login}</h3>
          {this.props.user.description !== undefined && this.props.user.description.map( (arr, i) => <p key={i}>{arr[0].charAt(0).toUpperCase() + arr[0].slice(1) + ': ' + arr[1]}</p>)}
          <p>Profile: <a href={this.props.user.profile} target='_blank' rel='noreferrer'>{this.props.user.profile}</a></p>
        </DivWords>
      </DivMain>
    )
  }
}