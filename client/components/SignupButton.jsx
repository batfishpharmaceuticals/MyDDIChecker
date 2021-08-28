import React from 'react';

const SignupButton = props => {
    return (
        <div id='SignupButton'>
            <button onClick={props.formHandleClick}>Sign Up!</button>
        </div>
    );
};

export default SignupButton;