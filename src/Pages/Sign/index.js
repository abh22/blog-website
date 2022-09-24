import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";

import InputAdornment from "@mui/material/InputAdornment";
import { FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import { useDispatch } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./Sign.css";
import { signIN } from "../../JS/actions/actions";
import { Link } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";

export default function Sign() {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = () => {
    dispatch(signIN({ values }));
    console.log(values);
    
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <Topbar/>
    <div style={{ backgroundColor: "purple" }}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="signform">
          <TextField
            required
            helperText="Please enter your  username"
            id="demo-helper-text-misaligned"
            label=""
            onChange={handleChange("username")}
            value={values.username}
          />

          <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Link to="/write">
          <Button
            onClick={handleSubmit}
            variant="outlined"
            style={{ marginTop: 20, width: 150 }}
          >
            Sign in
          </Button></Link>
        </div>
        <div>
          <p>Don't have an account?
          <Link className="link" to="/signUp">Sign up!</Link>
          </p>
        </div>
      </Box>
    </div>
    </>
  );
}
