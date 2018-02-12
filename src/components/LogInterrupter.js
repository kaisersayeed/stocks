import React from 'react';

const LogInterrupter =(props)=> (
  <div>
    <button className="btn" type="button" onClick={()=> props.onButtonClick(props.buttonText)}>
      { props.buttonText }
    </button>
  </div>
);

export default LogInterrupter;

