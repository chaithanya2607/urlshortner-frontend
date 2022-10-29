import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import "./App.css";
import Button from "@mui/material/Button";

export default function Register() {
  return (
    <div>
      <h1
        style={{
          fontFamily: "serif",
          font: "Times New Roman",
          fontSize: "50px",
        }}
      >
        Sign up now
      </h1>

      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginLeft: "30%",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <TextField fullWidth label="Name" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginLeft: "30%",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <TextField fullWidth label="Username" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginLeft: "30%",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
        <TextField fullWidth label="Email" id="fullWidth" />
      </Box>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginLeft: "30%",
          backgroundColor: "white",
          marginBottom: "20px",
        }}
      >
          <TextField
          id="outlined-password-input"
          label=" Password"
          type="password"
          autoComplete="current-password"
          style={{ backgroundColor: "white",width:"500px"}}
        /><br></br>
      </Box>
      <br></br>
      <Button
          style={{
            fontFamily: "serif",
            font: "Times New Roman",
            width: "200px",
            height: "50px",
          }}
          variant="contained"
          color="success"
        >
          Sign Up
        </Button>
    </div>
  );
}
