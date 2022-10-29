import React from "react";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

function Login() {
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
        Login to your account
      </h1>
      <Form style={{ alignContent: "center", margin: "30px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <TextField
            style={{ backgroundColor: "white", width: "400px" }}
            id="outlined-basic"
            label="Enter your Email "
            variant="outlined"
          />
          <br></br>
          <Form.Text
            style={{
              fontFamily: "serif",
              font: "Times New Roman",
              fontSize: "15px",
            }}
            className="text-muted"
          >
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <br></br>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <TextField
          id="outlined-password-input"
          label="Enter your password"
          type="password"
          autoComplete="current-password"
          style={{ backgroundColor: "white", width: "400px",margin:"20px" }}
        />
          <br></br><br></br>
          <a href="/forgotpassword">Forgot Password?</a>
        </Form.Group>
        <br></br>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            style={{
              fontFamily: "serif",
              font: "Times New Roman",
              fontSize: "20px",
            }}
            type="checkbox"
            label="Check me out"
          />
        </Form.Group>
        <br></br>
        <Button
        onClick={()=>Navigate("/urlshortner")}
          style={{
            fontFamily: "serif",
            font: "Times New Roman",
            width: "200px",
            height: "50px",
          }}
          variant="contained"
          color="success"
        >
          Login
        </Button>
      </Form>
    </div>
    
  );
}

export default Login;
