import React from "react";


//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';
import { Button, Input, Grid, Paper, Divider } from '@material-ui/core';
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
      <Paper elevation={20} style={{padding: '20px', backgroundColor: '#eee'}}>
      <h1> LOGISTIKAPP </h1>
      <Divider />
        <form onSubmit={props.handleSubmit} >
          <Grid item xs={12}>
            <StyledInput
              id="standard"
              placeholder="Username"
              onChange={props.handleChange('username')}
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledInput
              id="standard-password-input"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              onChange={props.handleChange('password')}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" type="submit" style={{backgroundColor: '#427df4', margin: '10px'}}>
              LOGGA IN
        </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );


};

const StyledInput = styled(Input)`
  margin: 10px;
`

export default Login;
