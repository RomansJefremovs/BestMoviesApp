import React, { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  CssBaseline,
  Paper,
} from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import "../App.css";
import { theme } from "../theme/theme";
import callApi from "../middleware/callApi";

function SignIn() {
  const baseURL = `https://cloudcomputingapi.azurewebsites.net`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const temp = await callApi(
      baseURL + `/User/login/${data.get("username")}/${data.get("password")}`
    );

    console.log(temp);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <LinkRouter to="*">Forgot password?</LinkRouter>
                </Grid>
                <Grid item>
                  <LinkRouter to="/sign-up">
                    {"Don't have an account? Sign Up"}
                  </LinkRouter>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn;
