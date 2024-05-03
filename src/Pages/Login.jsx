import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Input, IconButton } from "@mui/material";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, makeStyles } from "@mui/material/styles";
import "../styles/testStyles.css";
import loginImage from "../images/loginBackground.png";
import kpmgWhite from "../images/kpmgWhite.png";
import symbol from "../images/symbol.png";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const theme = createTheme({
  palette: {
    ochre: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
    blueColor: {
      dark: "#1C244B",
    },
    white: "#FFFFFF",
  },
});
export default function SignInSide() {
  // const CssTextField = makeStyles({
  //   root: {
  //     '& label': {
  //       color: 'red',
  //     },
  //     '& label.Mui-focused': {
  //       color: 'white',
  //     },
  //     '& .MuiInput-underline:after': {
  //       borderBottomColor: 'yellow',
  //     },
  //     '& .MuiOutlinedInput-root': {
  //       '& fieldset': {
  //         borderColor: 'white',
  //       },
  //       '&:hover fieldset': {
  //         borderColor: 'white',
  //       },
  //       '&.Mui-focused fieldset': {
  //         borderColor: 'yellow',
  //       },
  //     },
  //   },
  // })(TextField);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
    fontSize: "5 rem",
    fontWeight: "700",
    fontFamily: ["OpenSans", "sans-serif"],
  }));
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" style={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={8}
          sm={8}
          md={8}
          style={{ backgroundColor: "rgba(28, 36, 75, 1)" }}
        >
          <div
            style={{
              padding: "2%",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img
              src={symbol}
              style={{
                alignSelf: "flex-start",
                display: "flex",
                width: "4vw",
                position: "absolute",
              }}
            />
            <img
              src={kpmgWhite}
              style={{
                width: "15%",
                display: "flex",
                alignSelf: "center",
                marginTop: "5%",
              }}
            />
          </div>
          <Box
            style={{
              my: 8,
              mx: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="textContainer">
              <div className="textStyle">Welcome to KPMG's </div>
              <div className="textStyle">
                Exp.
                <div className="X">X</div>
              </div>
            </div>

            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              style={{ marginLeft: "10%", marginRight: "10%", width: "90%" }}
            >
              <div
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="openSans"
                  style={{
                    fontSize: "1.5 rem",
                    color: "white",
                    fontWeight: "700",
                    marginBottom: "0.5%",
                  }}
                >
                  SIGN IN
                </div>
                <div
                  style={{
                    color: "#CBCBCB",
                    fontSize: "0.5rem",
                    fontWeight: "600",
                    marginBottom: "2%",
                  }}
                >
                  Sign in to your supplier portal
                </div>
              </div>
              <div
                className="formDetails"
                style={{
                  alignItems: "flex-start",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="openSans"
                  style={{
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  USERNAME
                </div>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <InputGroup>
                    <Form.Control
                      aria-label="Dollar amount (with dot and two decimal places)"
                      style={{
                        backgroundColor: "transparent",
                        borderColor: "#CECCCC",
                        borderRadius: 0,
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        color: "white",
                      }}
                    />
                    <InputGroup.Text
                      style={{
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        borderRadius: 0,
                        borderBottomWidth: 1,
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                      }}
                    >
                      <PersonIcon style={{ color: "white" }} />
                    </InputGroup.Text>
                  </InputGroup>
                  {/* <input
                    // placeholder="Email"
                    className="inputStyle"
                    style={{
                      backgroundColor: "transparent",

                      borderWidth: 0,
                      borderBottomWidth: "1px",
                      borderColor: "rgba(206, 204, 204, 1)",
                      width: "100%",
                      color: "white",
                    }}
                  /> */}
                </Grid>
                <div
                  className="openSans"
                  style={{
                    color: "white",
                    fontSize: "0.75rem",
                    fontWeight: "600",
                  }}
                >
                  PASSWORD
                </div>
                <InputGroup>
                  <Form.Control
                    aria-label="Dollar amount (with dot and two decimal places)"
                    style={{
                      backgroundColor: "transparent",
                      borderColor: "#CECCCC",
                      borderRadius: 0,
                      borderWidth: 0,
                      borderBottomWidth: 1,
                      color: "white",
                    }}
                  />
                  <InputGroup.Text
                    style={{
                      backgroundColor: "transparent",
                      borderWidth: 0,
                      borderRadius: 0,
                      borderBottomWidth: 1,
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <LockIcon style={{ color: "white" }} />
                  </InputGroup.Text>
                </InputGroup>
                {/* <div
                  style={{
                    display: "flex",
                    width: "auto",
                  }}
                >
                  
                  <input
                    // placeholder="Email"
                    className="inputStyle"
                    style={{
                      backgroundColor: "transparent",

                      borderWidth: 0,
                      borderBottomWidth: "1px",
                      borderColor: "rgba(206, 204, 204, 1)",
                      width: "100%",
                      color: "white",
                    }}
                  ></input>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <LockIcon
                      style={{ color: "white", position: "absolute" }}
                    />
                  </div>
                </div> */}
                {/* <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                style={{display:'flex',alignContent:'flex-end'}}
                // onClick={handleOpenNavMenu}
                // color="inherit"
              >
                <LockIcon style={{color:'white',position:'absolute'}}/>
              </IconButton> */}

                {/* <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  // color="inherit"
                >
                  <PersonIcon style={{ color: "white" }} />
                </IconButton> */}

                <div
                  style={{
                    color: "#CBCBCB",
                    fontSize: "0.6rem",
                    fontWeight: "600",
                    // justifyContent:'center',
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "4%",
                    marginTop:'2%'
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "black",
                      display: "flex",
                      alignContent: "flex-start",
                    }}
                  >
                    {/* <Checkbox
                      defaultChecked
                      size="large"
                      style={{
                        alignSelf: "flex-start",
                        outline: "none",
                        color: "#FCF4EB",
                        "&.Mui-checked": {
                          color: "#FCF4EB",
                          fontSize: "5rem",
                        },
                        "&.Mui-Typography-body1": {
                          fontSize: "4px",
                        },
                        ".MuiFormControlLabel-label": {
                          color: "#FCF4EB",
                          fontSize: "5rem",
                          margin: "1000px",
                        },
                      }}
                    /> */}

                    <input
                      type="checkbox"
                      className="checkboxStyle"
                      style={{}}
                    ></input>
                  </div>
                  I agree to the&nbsp;
                  <div style={{ textDecoration: "underline" }}>
                    terms & conditions.
                  </div>
                </div>
              </div>

              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                variant="standard"
                inputProps={{
                  style: { color: "yellow", borderColor: "yellow" },
                }}
                InputLabelProps={{
                  style: { color: "yellow", borderColor: "yellow" },
                }}
                InputProps={{
                  style: { color: "yellow", borderColor: "yellow" },
                }}
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
                variant="standard"
                color="warning"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="3rem"
                sx={{
                  color: "blueColor.dark",
                  fontSize: "1.5 rem",
                  fontWeight: "700",
                  backgroundColor: "#fff",
                  "&:hover": {
                    backgroundColor: "",
                  },
                }}
              >
                <div
                  className="openSans"
                  id="textID"
                  style={{
                    color: "#1C244B",
                    fontSize: "1rem",
                    fontWeight: "750",
                    "&:hover": {
                      color: "#1C244B",
                      fontSize: "1.5 rem",
                      fontWeight: "700",
                    },
                  }}
                >
                  LOGIN
                </div>
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    className="openSans"
                    variant="body2"
                    style={{
                      textDecoration: "none",
                      color: "#E3E5E8",
                      fontSize: "0.7rem",
                      fontWeight: "500",
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright style={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          style={{
            flex: 1,
            display: "flex",
            bgcolor: "white",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              // my: 8,
              // mx: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              justifyContent: "center",
            }}
          >
            <div className="imageContainer">
              <img src={loginImage} alt="img" />
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
