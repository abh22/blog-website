import React from "react";
import { useDispatch } from "react-redux";
import { signUP } from "../../JS/actions/actions";
import IconButton from '@mui/material/IconButton';

import InputAdornment from '@mui/material/InputAdornment';
import { FormControl } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import './Sign.css'

export default function Signup() {

const dispatch=useDispatch();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    username: '',
   
    password:'',
    showPassword: false,
  });
  const handleSubmit = () => {
    dispatch(signUP({ values }));
    console.log(values)
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
    <div style={{backgroundColor:"purple"}}>
    <Box
   
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
       
      }}
      noValidate
      autoComplete="off"
    >
      <div className="signform" >
        <TextField
        
          helperText="Please enter your name"
          id="demo-helper-text-misaligned"
          label="Name"
        />
        <TextField
        
          required
          helperText="Please enter your email"
          id="demo-helper-text-misaligned"
          label="Email"
        />

        <TextField
        
          id="demo-helper-text-misaligned-no-helper"
          label="username"
          required
        />
         <FormControl  sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
             <Button onClick={handleSubmit} variant="outlined" style={{marginTop:20,width:150}}>Sign Up</Button>
      </div>
    </Box>
    </div>
  );
}
