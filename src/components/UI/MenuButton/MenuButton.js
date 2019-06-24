import React from 'react';
import classes from './MenuButton.css';

const menuButton = (props) => (
  <button 
    className={classes.MenuButton} 
    onClick={props.clicked}
    alt="Toggle Side Drawer"></button>
);

export default menuButton;