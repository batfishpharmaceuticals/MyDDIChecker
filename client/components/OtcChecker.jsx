 import React, { Component } from 'react';

class OtcChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: '',
        alert: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleResetAlert = this.handleResetAlert.bind(this);
  }

  handleChange = (event) => {
    const label = event.target.getAttribute('label');
    const value = event.target.value;
    this.setState({ [label]: value });
  };

  handleOtcSubmit(rx, otc) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rx, otc })
    };
    fetch('/rx', options)
        .then(res => res.json())
        .then(res => {
            this.setState({ input: '', alert: res })
        })
        .catch(err => console.log('OtcChecker.handleOtcSubmit: get status: ERROR: ', err));
    }

    handleResetAlert = () => {
        this.setState({ alert: null });
    }

  render() {
    if (this.state.alert === false) {
        window.alert('No interactions found')
        this.handleResetAlert();
    }
    else if (this.state.alert === true) {
        window.alert('Interactions found - Product not recommended')
        this.handleResetAlert();
    }
    return (
      <div id="OtcCheckerBox">
        <p>OTC CHECKER</p>
        <input type="text" onChange={this.handleChange} label="input"/>
        <button type="submit" onClick={() => this.handleOtcSubmit(this.props.rxData, this.state.input)}>Check For Interactions</button> 
      </div>
    );
  }
}


export default OtcChecker;