import React from 'react';
import classes from './Button.css';

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
      // convert two array elements into a string with a space between
    onClick={props.clicked}>{props.children}</button>
);

export default button;