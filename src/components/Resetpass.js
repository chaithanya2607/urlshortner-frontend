import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Resetpass() {
  const Navigate = useNavigate();
  return (
    <div>
      <h1
        style={{
          fontFamily: "serif",
          font: "Times New Roman",
          fontSize: "50px",
        }}
      >
        Reset Password
      </h1>
      <TextField
        id="outlined-password-input"
        label="New Password"
        type="password"
        autoComplete="current-password"
        style={{ backgroundColor: "white", width: "400px", margin: "20px" }}
      />
      <br></br>
      <TextField
        id="outlined-password-input"
        label="Retype Password"
        type="password"
        autoComplete="current-password"
        style={{ backgroundColor: "white", width: "400px", margin: "20px" }}
      />
      <br></br>
      <Button
        onClick={() => Navigate("/login")}
        style={{
          fontFamily: "serif",
          font: "Times New Roman",
          width: "200px",
          height: "50px",
          margin: "20px",
        }}
        variant="contained"
        color="success"
      >
        Reset Password
      </Button>
    </div>
  );
}
//
