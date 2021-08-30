import React from 'react';
import Med from './Med.jsx';

const MyMedList = props => {
    const { rxData } = props;
    const medList = [];
    for (let i = 0; i < rxData.length; i += 1) {
        medList.push(<Med medData={rxData[i]}/>);
    };
    return (
        <div id='medListBox'>
            <div>{medList}</div>
            <input type='text' onChange={this.props.handleChange} label='rxInput'/>
            <div id='addMedButton'>
                <button onClick={() => {this.props.handleAddRx(this.props.userId, this.props.input)}}>Add Med</button>
            </div>
        </div>
    );
}

export default MyMedList;