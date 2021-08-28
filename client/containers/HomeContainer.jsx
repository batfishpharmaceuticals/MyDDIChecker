import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Login from '../components/Login.jsx';
import SignupForm from '../components/SignupForm.jsx';
import MyMedsDisplay from '../components/MyMedsDisplay.jsx';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view = 'home'
        }
    }
}

export default Home;