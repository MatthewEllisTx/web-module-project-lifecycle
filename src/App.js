import React from 'react';

import Form from './components/Form';
import UserCards from './components/UserCards';

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
      <div>
        <Form setNameToSearch={this.setNameToSearch}/>
        <UserCards nameToSearch={this.state.nameToSearch}></UserCards>
      </div>
    )
  }
}