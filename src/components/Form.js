import React from "react";

export default class Form extends React.Component {
  
  state = {
    name: ''
  }

  onChange = e => {
    this.setState({name: e.target.value});
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.setNameToSearch(this.state.name);
    this.setState({name: ''});
  }

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
            Search user:<br/>
            <input type='text' value={this.state.name} placeholder='Name...' onChange={this.onChange} />
          </label>
          <br/>
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}