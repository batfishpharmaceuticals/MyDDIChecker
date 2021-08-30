import React, { Component } from 'react';

class LoginButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
      }
  }

  handleChange = (event) => {
      const label = event.target.getAttribute('label');
      const value = event.target.value;
      this.setState({ [label]: value });
  };

  render() {
      return (
          <div id='LoginButton'>
              <p id='username'>Username<input onChange={this.handleChange} label='username'></input></p>
              <p id='password'>Password<input type='password' onChange={this.handleChange} label='password'></input></p> 
              <button type="submit" onClick={() => this.props.handleLoginSubmit(this.state.username, this.state.password)}>Login</button>
          </div>
      )
  };

  
}

export default LoginButton;