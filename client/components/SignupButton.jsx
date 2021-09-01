import React from 'react';
import { Link } from 'react-router-dom';

const SignupButton = props => {
    return (
        <div id='SignupButton'>
            <Link to={'/signup'}>
                <button onClick={props.formHandleClick}>Sign Up</button>
            </Link>
        </div>
    );
};

export default SignupButton;