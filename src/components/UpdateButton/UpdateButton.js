//*****THIS COMPONENT IS A BUTTON WHICH IS RENDERED TO MY ADDMOVIES COMPONENT****
//MODULES
import React, { Component } from "react";
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Badge,
  List,
  ExapandLess,
  ListSubheader,
  ListItem,
  ListItemText,
  ListItemIcon,
  createMuiTheme,
  Collapse,
  CardHeader,
  CardActions,
  ThemeProvider,
  Typography,
  CardMedia,
  CardActionArea,
  CardContent,
  IconButton,
  makeStyles,
  InputBase,
  TextField,
  Card,
  withStyles,
} from "@material-ui/core";
//import PropTypes from 'prop-types';

const theme = createMuiTheme({
  shape: {
    borderRadius: "40px",
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ed8b8a",
    },
    background: {
      default: "#42f59b",
    },
    typography: {
      fontFamily: "Arial",
    },
  },
});

class UpdateButton extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Button id="editButton" variant="contained" color="primary">
          UPDATE
        </Button>
      </ThemeProvider>
    ); //END return
  } //END render
} //END SubmitButton
// export default withStyles(styles)(UpdateButton);
export default UpdateButton;
