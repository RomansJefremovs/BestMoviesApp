import { Link as LinkRouter, Outlet } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider } from "@emotion/react";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { theme } from "../theme/theme";
import {FormEvent} from "react";
import callApi from "../middleware/callApi";
import {login} from "../middleware/login";
import {register} from "../middleware/register";
import {passwordHash} from "../middleware/passwordHash";

function SignUp() {
  const baseURL = `https://cloudcomputingapi.azurewebsites.net`;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username")
    const password = data.get("password")
    if (username !== null && password !== null) {
      const hashPassword = passwordHash(password.toString())
      const registerCall = await register(username.toString(), hashPassword)
      if (registerCall == 'Success'){
        window.location.href = `/sign-in`
      }else{
        alert(registerCall)
      }
      console.log(registerCall)
    } else {
      console.log("oops")
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="user-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <LinkRouter to="/sign-in">
                  Already have an account? Sign in
                </LinkRouter>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
