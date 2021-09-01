import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            auth: false
        }
    }
    
    handleSubmit = () => {
        const body = {...this.state};
        fetch('/user/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then((res) => {
            console.log(res);
            if (res.status === 200) {
                this.setState({auth: true})
            }
        })
    };

    render() {
        return (
            <>
                {this.state.auth ? <Redirect to='/'/> : null}
                <div id='SignupForm'>
                    <h2>Create A New Account</h2>
                    <p id='username'>Username<input onChange={(e) => this.setState({username: e.target.value})} label='username'></input></p>
                    <p id='password'>Password<input type='password' onChange={(e) => this.setState({password: e.target.value})} label='password'></input></p> 
                    <button type="submit" onClick={() => {this.handleSubmit()}}>Create Account</button>
                </div>
            </>
        )
    };

    
}

export default SignupForm;