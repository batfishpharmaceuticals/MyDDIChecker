import React, { Component } from 'react';
import MyMedList from './MyMedList.jsx';
import OtcChecker from './OtcChecker.jsx';

class MyMedsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rxInput: '',
            rxData: []
        }
        // Bind this to the functions
    }
    
    // Fetch user perscription data on page load
    componentDidMount() {
        this.setState({ rxData: this.props.rxData })
    }

    handleChange = (event) => {
        const label = event.target.getAttribute('label');
        const value = event.target.value;
        this.setState({ [label]: value });
    };

    // Button logic to add an Rx
    handleAddRx(userId, ...rx){
        // Add Rx to db
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rx, userId })
        };
        fetch('/user/addRx', options)
            .then(res => res.json())
            .then(res => {
                // check if rx was added successfully, if so add to db
                // is res.body the added rx?
                this.setState(prevState => ({
                   rxData: [...prevState, ...rx]
                }))
            })
            .catch(err => console.log('MyMedsDisplay.handleAddRx: get status: ERROR: ', err));
    }

    // // Button logic to remove an Rx
    // handleDeleteRx(rxId){
    //     // Remove Rx from db
    //     const options = {
    //         method: 'DELETE',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ rxId })
    //     };
    //     fetch('/user/deleteRx', options)
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState(prevState => ({
    //                rxData: prevState.filter(rx => (rx._id !== rxId)) 
    //             }))
    //         })
    //         .catch(err => console.log('MyMedsDisplay.handleDeleteRx: get status: ERROR: ', err));
    // }

    render() {
        return (
            <div id='MyMedsDisplay'>
                <MyMedList input={this.state.input} handleChange={this.handleChange} userId={this.props.userId} rxData={this.state.rxData} handleAddRx={handleAddRx} handleDeleteRx={handleDeleteRx}/>
                <OtcChecker />
            </div>
        )
    }
}

export default MyMedsDisplay;