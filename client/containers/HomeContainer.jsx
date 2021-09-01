import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router';
import LoginButton from '../components/LoginButton.jsx';
import SignupButton from '../components/SignupButton.jsx';
import SignupForm from '../components/SignupForm.jsx';
import MyMedsDisplay from '../components/MyMedsDisplay.jsx';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
    userId: state.meds.userId,
    rxData: state.meds.rxData
});

const mapDispatchToProps = dispatch => ({
    updateUserId: (userId, rxData) => {
        dispatch(actions.handleLoginUser(userId, rxData));
    }
});

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: false,
            // userId: '',
            // rxData: []
        }
        // this.homeHandleClick = this.homeHandleClick.bind(this);
        // this.formHandleClick = this.formHandleClick.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }
    
    // Set state to home
    // homeHandleClick = () => {
    //     this.setState({ view: 'home' });
    // }
    // // Set state to form
    // formHandleClick = () => {
    //     this.setState({ view: 'form' });
    // }
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
              if (res.match === true) {
                this.props.updateUserId(res.id, res.rxs);
                this.setState({ view: true });
              }
            //   if (res.match === true) this.setState({ view: true, userId: res.id, rxData: res.rxs });
          })
          .catch(err => console.log('LoginButton.handleLoginSubmit: get status: ERROR: ', err));
    };

    render() {
        return (
            <>
                {this.state.view ? <Redirect to='/home'/> : null}
                <Switch>
                    <Route exact path='/'>
                        <div id='HomePage'>
                            <h2>Welcome</h2>
                            <LoginButton handleLoginSubmit={this.handleLoginSubmit}/>
                            <SignupButton />
                        </div>
                    </Route>
                    <Route exact path='/signup'>
                        <SignupForm />
                    </Route>
                    <Route exact path='/home'>
                        <MyMedsDisplay userId={this.props.userId} rxData={this.props.rxData}/>
                    </Route>
                </Switch>
            </>
        )
        

        // if (this.state.view === 'home') { // This is the landing page with our login components and sign up button
        //     return (
        //         <div id='HomePage'>
        //             <h2>Welcome</h2>
        //             <LoginButton handleLoginSubmit={this.handleLoginSubmit}/>
        //             <SignupButton formHandleClick={this.formHandleClick}/>
        //         </div>
        //     );
        // }
        // else if (this.state.view === 'form') { // This is the sign up form to create a new account
        //     return (
        //         <div>
        //             <SignupForm homeHandleClick={this.homeHandleClick}/>
        //         </div>
        //     );
        // }
        // else if (this.state.view === 'display') { // This is the main app
        //     return (
        //         <div>
        //             <MyMedsDisplay userId={this.state.userId} rxData={this.state.rxData}/>
        //         </div>
        //     )
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);