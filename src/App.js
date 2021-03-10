import React from 'react';
import styled from 'styled-components';

import Form from './components/Form';
import UserCards from './components/UserCards';

const DivMain = styled.div`
  text-align: center;
`

export default class App extends React.Component {

  state = {
    nameToSearch: '',
  }

  setNameToSearch = newName => {
    this.setState({
      nameToSearch: newName
    });
  }
  
  componentDidUpdate(){
    console.log(this.state.nameToSearch)
  }

  render(){
    return (
      <DivMain>
        <Form setNameToSearch={this.setNameToSearch}/>
        <UserCards nameToSearch={this.state.nameToSearch} setNameToSearch={this.setNameToSearch}></UserCards>
      </DivMain>
    )
  }
}