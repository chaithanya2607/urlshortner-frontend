import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Urlshortner() {
  return (
    <div style={{ disple: "flex", flexDirection: "row", margin: "100px" }}>
      <h1
        style={{
          fontFamily: "serif",
          font: "Times New Roman",
          fontSize: "50px",
        }}
      >
        URL SHORTNER
      </h1>

      <TextField
        style={{ backgroundColor: "white", width: "700px", margin: "20px" }}
        id="outlined-basic"
        label="Paste your URL here"
        variant="outlined"
      />
      <br></br>
      <TextField
        style={{ backgroundColor: "white", width: "700px" }}
        id="outlined-basic"
        label="Short URL"
        variant="outlined"
      />
      <br></br>
      <Button
        style={{
          fontFamily: "serif",
          font: "Times New Roman",
          width: "200px",
          height: "50px",
          margin: "40px",
        }}
        variant="contained"
        size="large"
        color="success"
      >
        Shorten URL
      </Button>
    </div>
  );
}
