import React from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

export default function Forgotpass() {
    const Navigate=useNavigate();
  return (
    <div>
         <h1
        style={{
          fontFamily: "serif",
          font: "Times New Roman",
          fontSize: "50px",
        }}
      >
        Forgot Password?
      </h1>
         <TextField
            id="outlined-basic"
            style={{ backgroundColor: "white", width: "400px",margin:"20px" }}
            label="Enter your Email"
            variant="outlined"
          /><br></br>
           <Button
           onClick={()=>Navigate("/resetpassword")}
          style={{
            fontFamily: "serif",
            font: "Times New Roman",
            width: "200px",
            height: "50px",
            margin:"20px"
          }}
          variant="contained"
          color="success"
        >
          Forgot Password
        </Button>

    </div>
  )
}
