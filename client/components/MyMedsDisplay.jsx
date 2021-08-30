import React, { Component } from 'react';
import MyMedList from './MyMedList.jsx';
import OtcChecker from './OtcChecker.jsx';

class MyMedsDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('API ENDPOINT PLACEHOLDER')
            .then(res => res.json())
            .then((data) => {
                this.setState({ data: data })
            })
            .catch(err => console.log('HomeContainer.componentDidMount: get data: ERROR: ', err));
    }

    render() {
        return (
            <div id='MyMedsDisplay'>
                <MyMedList data={this.state.data}/>
                <OtcChecker />
            </div>
        )
    }
}

export default MyMedsDisplay;