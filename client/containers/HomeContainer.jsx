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
            view: 'home'
        }
        this.homeHandleClick = this.homeHandleClick.bind(this);
        this.formHandleClick = this.formHandleClick.bind(this);
        this.homeHandleClick = this.displayHandleClick.bind(this);
    }
    // Set state to home // Login/SignUp page
    homeHandleClick = () => {
        this.setState({ view: 'home' });
    }
    // Set state to form // Create account page
    formHandleClick = () => {
        this.setState({ view: 'form' });
    }
    // Set state to display // Display the main page, core funtionality
    displayHandleClick = () => {
        this.setState({ view: 'display' });
    }

    render() {
        if (this.state.view === 'home') { // Landing page; Login and Sign Up options
            return (
                <div>
                    <LoginButton displayHandleClick={this.displayHandleClick}/>
                    <SignupButton formHandleClick={this.formHandleClick}/>
                </div>
            );
        }
        else if (this.state.view === 'form') { // Sign Up form to create account
            return (
                <div>
                    <SignupForm displayHandleClick={this.displayHandleClick}/>
                </div>
            );
        }
        else if (this.state.view === 'display') { // Once logged in, show app
            return (
                <div>
                    <MyMedsDisplay homeHandleClick={this.homeHandleClick}/>
                </div>
            );
        }
    }
}

export default withRouter(HomeContainer);