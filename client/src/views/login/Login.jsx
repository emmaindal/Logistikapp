import React from "react";


//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import {AppBar, Button, TextField, Input} from '@material-ui/core';

const Login = () => {
  return (
    <div>
      <div>
        <Input
          id="standard"
          placeholder="Username"
          //className={classes.textField}
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <Input
          id="standard-password-input"
          placeholder="Password"
          //className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
        <br />
        <Button variant="contained" color="blue">
          Primary
        </Button>
      </div>
    </div>
  );
};

const style = {
  margin: 15,
}

export default Login;
