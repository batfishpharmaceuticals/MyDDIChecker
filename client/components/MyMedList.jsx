import React from 'react';
import Med from './Med.jsx';

const MyMedList = props => {
    const { data } = props;
    const medList = [];
    for (let i = 0; i < data.length; i += 1) {
        medList.push(<Med medData={data[i]}/>);
    };
    return (
        <div id='medListBox'>
            <div>{medList}</div>
        </div>
    );
}

export default MyMedList;