import React, { Component } from "react";
import { connect } from "react-redux";
import mapStoreToProps from "../../redux/mapStoreToProps";
// import  '/LoginForm.css'
import StyledButton from '../StyledButton/StyledButton'
import {
  AppBar,
  CssBaseline,
  CardContent,
  Typography,
  Toolbar,
  Grid,
  Badge,
  IconButton,
  makeStyles,
  InputBase,
  TextField,
  Card,
  CardMedia,
  centerText,
  withStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core";


const styles = {
  formContainer : {
    paddingTop: '20px',
    paddingLeft: '50px',
    paddingRight: '50px'
},
marginBottom : {
marginBottom: '100px',

},
marginAuto : {
    margin: 'auto',

},
avatar: {
    backgroundColor: '#fcf403',
    color: '#ad0940'
},
card: {
boxShadow: 'rgba(255, 0, 0, 0.117647) 0px 1px 6px, rgba(255, 0, 0, 0.117647) 0px 1px 4px'
}


}


class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };





  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: "LOGIN",
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  handleNewClick = (event) => {
  console.log('hello')
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container 
      spacing={2} 
      style={styles.formContainer}
      direction="column"
      alignItems="center"
      justify="center">

      {/* <Grid item xs={4} key={pokemonId} spacing={1}> */}

      <form className="formPanel" onSubmit={this.login}>
                  <h1>Login</h1>

        <Typography variant="h4">
          {this.props.store.errors.loginMessage && (
            <h3 className="alert" role="alert">
              {this.props.store.errors.loginMessage}
            </h3>
          )}
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                required
                value={this.state.username}
                onChange={this.handleInputChangeFor("username")}
                className="input"
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                required
                value={this.state.password}
                onChange={this.handleInputChangeFor("password")}
              />
            </label>
          </div>
          <div>
            <input className="btn" type="submit" name="submit" value="Log In" />
          </div>
        </Typography>
      </form>
      {/* <StyledButton onClick={(event) => this.handleNewClick(event)}/> */}
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(LoginForm);
