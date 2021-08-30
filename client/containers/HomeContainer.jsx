import React, { Component } from 'react';
import { withRouter } from 'react-router';
import LoginButton from '../components/LoginButton.jsx';
import SignupButton from '../components/SignupButton.jsx';
import SignupForm from '../components/SignupForm.jsx';
import MyMedsDisplay from '../components/MyMedsDisplay.jsx';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'home',
        }
        this.homeHandleClick = this.homeHandleClick.bind(this);
        this.formHandleClick = this.formHandleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    
    // Set state to home
    homeHandleClick = () => {
        this.setState({ view: 'home' });
    }
    // Set state to form
    formHandleClick = () => {
        this.setState({ view: 'form' });
    }

    handleLoginSubmit = (username, password) => {
        const body = {username, password};
        fetch('/user/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then((res) => {
              if (res.status === 200) this.setState({ view: 'display' });
            //   if (username === 'test') this.setState({ view: 'display' });
          })
          .catch(err => console.log('LoginButton.handleLoginSubmit: get status: ERROR: ', err));
    };

    render() {
        if (this.state.view === 'home') { // This is the landing page with our login components and sign up button
            return (
                <div id='HomePage'>
                    <h2>Welcome</h2>
                    <LoginButton handleLoginSubmit={this.handleLoginSubmit}/>
                    <SignupButton formHandleClick={this.formHandleClick}/>
                </div>
            );
        }
        else if (this.state.view === 'form') { // This is the sign up form to create a new account
            return (
                <div>
                    <SignupForm homeHandleClick={this.homeHandleClick}/>
                </div>
            );
        }
        else if (this.state.view === 'display') { // This is the main app
            return (
                <div>
                    <MyMedsDisplay />
                </div>
            )
        }
    }
}

export default withRouter(HomeContainer);