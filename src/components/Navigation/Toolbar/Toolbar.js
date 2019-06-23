import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from '../../UI/MenuButton/MenuButton';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.MenuButton} >
      <MenuButton 
      open={props.open} 
      close={props.closed} />
    </div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;