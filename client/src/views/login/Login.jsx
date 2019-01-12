import React from 'react'

import {
  Button,
  Input,
  Grid,
  Paper,
  InputAdornment,
  IconButton
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import styled from 'styled-components'

const Login = ({
  handleChange,
  handleClickShowPassword,
  handleSubmit,
  showPassword
}) => {
  return (
    <Grid
      container
      spacing={40}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <StyledPaper>
        <Logo> LOGISTIKAPP </Logo>
        <form onSubmit={handleSubmit}>
          <Grid item>
            <StyledInput
              id="standard"
              placeholder="Username"
              onChange={handleChange('username')}
              autoFocus={true}
            />
          </Grid>
          <Grid item>
            <StyledInput
              id="standard-password-input"
              placeholder="Password"
              type={!showPassword ? 'password' : 'text'}
              autoComplete="current-password"
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {!showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item>
            <StyledButton variant="contained" type="submit">
              LOGGA IN
            </StyledButton>
          </Grid>
        </form>
      </StyledPaper>
    </Grid>
  )
}

export default Login

const StyledInput = styled(Input)`
  &&& {
    margin-bottom: 10%;
    width: 100%;
  }
`

const StyledButton = styled(Button)`
  &&& {
    margin-top: 20px;
    background-color: #427df4;
    color: white;
    font-weight: bold;
  }
`

const StyledPaper = styled(Paper)`
  &&& {
    box-shadow: 1px 1px 20px rgba(206, 206, 206, 0.8);
    padding: 2rem;
    background-color: #fff;
    text-align: center;
  }
`

const Logo = styled.h1`
  margin-bottom: 2rem;
  margin-top: 0;
`
