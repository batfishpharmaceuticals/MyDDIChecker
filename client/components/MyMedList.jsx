import React from 'react';
import Med from './Med.jsx';

const MyMedList = props => {
    console.log(props.userId);
    const { rxData } = props;
    const medList = [];
    for (let i = 0; i < rxData.length; i += 1) {
        medList.push(<Med medData={rxData[i].name}/>);
    };
    return (
        <div id='medListBox'>
            <p>TEST</p>
            <div>{medList}</div>
            <input type='text' onChange={props.handleChange} label='rxInput'/>
            <div id='addMedButton'>
                <button onClick={() => {props.handleAddRx(props.userId, props.rxInput)}}>Add Med</button>
            </div>
        </div>
    );
}

export default MyMedList;