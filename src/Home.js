import React from 'react';
import Button from "@mui/material/Button";
import {useNavigate} from 'react-router-dom';

export default function Home() {
    const Navigate=useNavigate();
  return (
    <div>
         <h1   style={{
          fontFamily: "serif",
          font: "Times New Roman",
          fontSize: "50px",
          margin:"50px"
        }}>URL SHORTNER</h1><br></br>
            <Button
            onClick={()=>Navigate("/login")}
          style={{
            fontFamily: "serif",
            font: "Times New Roman",
            width: "200px",
            height: "50px",
            margin:"30px"
          }}
          variant="contained"
          color="success"
        >
          Login
        </Button>
        <Button
         onClick={()=>Navigate("/register")}
          style={{
            fontFamily: "serif",
            font: "Times New Roman",
            width: "200px",
            height: "50px",
            margin:"30px"
          }}
          variant="contained"
          color="success"
        >
          Sign up
        </Button>

        
    </div>
  )
}
