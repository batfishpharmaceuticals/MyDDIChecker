import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
    userId: state.meds.userId
});

const mapDispatchToProps = dispatch => ({
    deleteRx: (medData) => dispatch(actions.deleteRx(medData)),
});

const Med = props => {
    const { medData } = props;

    // Button logic to remove an Rx
    function handleDeleteRx() {
        // Remove Rx from db
        const options = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ medData: medData, userId: props.userId })
        };
        fetch('/user/deleteRx', options)
            // .then(res => res.json())
            .then(res => {
                console.log('res:', res);
                // this.setState(prevState => ({
                //    rxData: prevState.filter(rx => (rx._id !== rxId)) 
                // }))
                if (res.status === 200) {
                    props.deleteRx(medData);
                }
            })
            .catch(err => console.log('MyMedsDisplay.handleDeleteRx: get status: ERROR: ', err));
    }
    
    return (
        <div id='medBox'>
            <div>{medData}</div>
            <button onClick={handleDeleteRx}>Delete</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Med);