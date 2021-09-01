import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom'; 

class LoginButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: ''
      }
    //   const history = useHistory();
      // history.push('/form')
  }

  handleChange = (event) => {
      const label = event.target.getAttribute('label');
      const value = event.target.value;
      this.setState({ [label]: value });
  };

  render() {
      return (
          <div id='LoginBox'>
              <p id='username'>Username<input onChange={this.handleChange} label='username'></input></p>
              <p id='password'>Password <input type='password' onChange={this.handleChange} label='password'></input></p> 
              <button id="LoginButton" type="submit" onClick={() => this.props.handleLoginSubmit(this.state.username, this.state.password)}>Login</button>
          </div>
      )
  };
}

export default LoginButton;