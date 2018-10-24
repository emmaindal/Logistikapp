import React from "react";


//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import { Button, Input, Grid, Paper, Divider, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from "@material-ui/icons";
import styled from "styled-components";

const Login = (props) => {


  return (

    <Grid
      container
      spacing={40}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >

      <StyledPaper elevation={18}>
        <h1> LOGISTIKAPP </h1>
        <Divider />
        <form onSubmit={props.handleSubmit} >
          <Grid item xs={11}>
            <StyledInput
              id="standard"
              placeholder="Username"
              onChange={props.handleChange('username')}
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={11}>
            <StyledInput
              id="standard-password-input"
              placeholder="Password"
              type={props.showPassword ? 'password' : 'text'}
              autoComplete="current-password"
              onChange={props.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={props.handleClickShowPassword}
                  >
                    {props.showPassword ? <VisibilityOff /> : <Visibility /> }
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs={12}>
            <StyledButton variant="contained" type="submit">
              LOGGA IN
        </StyledButton>
          </Grid>
        </form>
      </StyledPaper>
    </Grid>
  );


};

const StyledInput = styled(Input)`
  margin: 10px;
  width: 100%;
`

const StyledButton = styled(Button)`
  &&&{
    margin-top: 20px;
    background-color: #427df4;
  }
`

const StyledPaper = styled(Paper)`
  &&&{
    padding: 30px;
    background-color: #eee;
  }

`

//427df4
export default Login;
