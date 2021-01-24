import './modal.css';
import React, { Component } from 'react';
import { AppBar, Toolbar, Grid, Button, Badge, List, ExapandLess, ListSubheader, ListItem, ListItemText, ListItemIcon, createMuiTheme, Collapse, CardHeader, CardActions, Typography, CardMedia, CardActionArea, CardContent, IconButton, makeStyles, InputBase, TextField, Card, withStyles } from '@material-ui/core'

class Modal extends Component {

    const Modal = ({ handleClose, show, children }) => {
        const showHideClassName = show ? "modal display-block" : "modal display-none";
    
  render(){
    
    
  return (
    // <div className={showHideClassName}>
    <div>

      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
  }
};
}
export default Modal;