import React from "react";

import {
  Button,
  Input,
  Grid,
  Paper,
  Divider,
  InputAdornment,
  IconButton
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import styled from "styled-components";

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
      style={{ minHeight: "100vh" }}
    >
      <StyledPaper elevation={18}>
        <h1> LOGISTIKAPP </h1>
        <Divider />
        <form onSubmit={handleSubmit}>
          <Grid item xs={11}>
            <StyledInput
              id="standard"
              placeholder="Username"
              onChange={handleChange("username")}
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={11}>
            <StyledInput
              id="standard-password-input"
              placeholder="Password"
              type={!showPassword ? "password" : "text"}
              autoComplete="current-password"
              onChange={handleChange("password")}
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

export default Login;

const StyledInput = styled(Input)`
  margin: 10px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  &&& {
    margin-top: 20px;
    background-color: #427df4;
  }
`;

const StyledPaper = styled(Paper)`
  &&& {
    padding: 30px;
    background-color: #eee;
    text-align: center;
  }
`;
