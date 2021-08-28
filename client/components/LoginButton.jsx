import React from 'react';

const LoginButton = props => {
  return (
    <div id='LoginButton'>
      <button onClick={props.displayHandleClick}>Login</button>
    </div>
  );
};

export default LoginButton;