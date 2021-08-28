import React, { Component } from 'react';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    // Update the state to the contents of the form
    handleChange = (event) => {
        const label = event.target.getAttribute('label');
        const value = event.target.value;
        this.setState({ [label]: value });
    };
    // Send the form data to the back-end, to create a new user account // Post request
    handleSubmit = () => {
        const body = {...state};
        fetch('/user/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
    };

    render() {
        return (
            <div>
                <p>Username<input onChange={this.handleChange} label='username'></input></p>
                <p>Password<input type='password' onChange={this.handleChange} label='password'></input></p> 
                <button type="submit" onClick={() => {this.handleSubmit(); this.props.displayHandleClick();}}>Submit</button>
            </div>
        )
    };

    
}

export default SignupForm;