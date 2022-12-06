import { Link as LinkRouter, Outlet } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Typography } from "@mui/material";
import { Container, Box, Avatar, Grid, TextField, Button } from "@mui/material";
import { FormEvent } from "react";
import { register } from "../middleware/register";
import { passwordHash } from "../middleware/passwordHash";

function SignUp() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    if (username !== null && password !== null) {
      const hashPassword = passwordHash(password.toString());
      const registerCall = await register(username.toString(), hashPassword);
      if (registerCall === "Success") {
        window.location.href = `/sign-in`;
      } else {
        alert(registerCall);
      }
      console.log(registerCall);
    } else {
      console.log("oops");
    }
  };
  return (
    <Container
      sx={{
        background:
          "linear-gradient(150deg, rgba(0,0,0,1) 40%, rgba(231,8,0,1) 100%)",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100%",
      }}
    >
      <Outlet />
      <Grid container sx={{ width: "80em", height: "40em", padding: "50px" }}>
        <Grid item xs={12} sm={8} md={5}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1 }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create An Account
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                    borderRadius: "10px",
                    opacity: "20%",
                  },
                  "& .Mui:focused": {
                    borderColor: "#fff",
                  },
                  "& .Mui:hover": {
                    borderColor: "#fff",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#fff",
                  },
                }}
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
                sx={{
                  "& .MuiInputBase-root": {
                    color: "#fff",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#fff",
                    borderRadius: "10px",
                    opacity: "20%",
                  },
                  "& .Mui:focused": {
                    borderColor: "#fff",
                  },
                  "& .Mui:hover": {
                    borderColor: "#fff",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    borderColor: "#fff",
                  },
                }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                id="sign-button"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    padding: "5px 10px 5px 10px",
                  }}
                >
                  Sign Up
                </Typography>
              </Button>
              <Grid container>
                <Grid item>
                  <LinkRouter to="/sign-in">
                    <Typography
                      variant="h5"
                      sx={{
                        fontFamily: "Cooper Hewitt Book",
                        fontSize: "15px",
                        fontWeight: "100",
                        padding: "5px 10px 5px 10px",
                      }}
                    >
                      Already have an account? <strong>Sign In</strong>
                    </Typography>
                  </LinkRouter>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
