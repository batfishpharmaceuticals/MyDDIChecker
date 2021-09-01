import React, { Component } from 'react';

class LoginButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
      }
  }

  render() {
      return (
          <div id='LoginBox'>
              <p id='username'>Username<input onChange={(e) => this.setState({username: e.target.value})} label='username'></input></p>
              <p id='password'>Password<input type='password' onChange={(e) => this.setState({password: e.target.value})} label='password'></input></p> 
              <button id="LoginButton" type="submit" onClick={() => this.props.handleLoginSubmit(this.state.username, this.state.password)}>Login</button>
          </div>
      )
  };
}

export default LoginButton;