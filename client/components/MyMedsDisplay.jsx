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
        this.handleAddRx = this.handleAddRx.bind(this);
    }
    
    // Fetch user prescription data on page load
    componentDidMount() {
        this.setState({ rxData: this.props.rxData })
    }

    handleChange = (event) => {
        const label = event.target.getAttribute('label');
        const value = event.target.value;
        this.setState({ [label]: value });
    };

    // Button logic to add an Rx
    handleAddRx(userId, ...rx) {
        console.log(rx);
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ rx, userId })
        };
        fetch('/user/addRx', options)
            .then(res => res.json())
            .then(res => {
                this.setState(prevState => ({
                   rxData: [...prevState.rxData, {name: rx[0], id: res.id}]
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
                <MyMedList rxInput={this.state.rxInput} handleChange={this.handleChange} userId={this.props.userId} rxData={this.state.rxData} handleAddRx={this.handleAddRx}/>
                <OtcChecker rxData={this.state.rxData}/>
            </div>
        )
    }
}

export default MyMedsDisplay;