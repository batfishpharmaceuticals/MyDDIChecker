import React from 'react';

const Med = props => {
    const { medData } = props;
    return (
        <div id='medBox'>
            <div>{medData}</div>
        </div>
    )
}

export default Med;