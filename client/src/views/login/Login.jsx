import React from "react";


//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import { Button, Input } from '@material-ui/core';

const Login = (props) => {


  return (

    <div>
      <form onSubmit={props.handleSubmit}>
        <Input
          id="standard"
          placeholder="Username"
          ////className={classes.textField}
          autoComplete="current-password"
          margin="normal"
          onChange={props.handleChange('username')}
        />
        <br />
        <Input
          id="standard-password-input"
          placeholder="Password"
          //className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          onChange={props.handleChange('password')}
        />
        <br />
        <Button variant="contained" color="blue" type="submit">
          LOGGA IN
        </Button>
      </form>
    </div>
  );
};

const style = {
  margin: 15,
}

export default Login;
