import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
  // using Aux since Backdrop is sitting next to Modal, and neither are children of the other

class Modal extends Component {
  // only using class for access to shouldComponentUpdate (could use memo instead)
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show
  }

  componentWillUpdate() {
    console.log('[Modal] will update')
  }

  render () {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;