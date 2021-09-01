import React from 'react';
import Med from './Med.jsx';

const MyMedList = props => {
    // console.log(props.userId);
    const { rxData } = props;
    const medList = [];
    for (let i = 0; i < rxData.length; i += 1) {
        medList.push(<Med medData={rxData[i].name}/>);
    };
    return (
        <div id='medListBox'>
            <div>{medList}</div>
            <input type='text' onChange={props.handleChange} label='rxInput'/>
            <button id='addMedButton' onClick={() => {props.handleAddRx(props.userId, props.rxInput)}}>Add Med</button>
        </div>
    );
}

export default MyMedList;