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
            userId: '',
            rxData: []
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
    // Send post request to the backend when the login button is clicked
    handleLoginSubmit = (username, password) => {
        const body = {username, password};
        fetch('/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then((res) => {
              console.log('hello it me loginSubmit')
              if (res.match === true) this.setState({ view: 'display', userId: res.id, rxData: res.rxs });
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
                    <MyMedsDisplay userId={this.state.userId} rxData={this.state.rxData}/>
                </div>
            )
        }
    }
}

export default withRouter(HomeContainer);