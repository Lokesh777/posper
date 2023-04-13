import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import axios from "axios";
import "./All.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api_url } from '../API/Api';


const initialFormData = {
  firstName: "",
  middleName: "",
  lastName: "",
  organisationName: "",
  gstNumber: "",
  address: "",
  mobileNumber: "",
  email: "",
  password: "",
};
export default function Authentication() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(false); 

  const signupSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      let res = await axios.post(`${api_url}auth/signup`, formData);
      toast.success(res.data.message); 
    
    } catch (err) {
        setError(true);
      console.log(err.message,err);
      toast.error(err.response.data.message)
    }
  }
  // events and functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({ ...formData, [name]: value });
  };



return (
  <form onSubmit={signupSubmit}>
    <ToastContainer position="top-center" />
    <Box
      display="flex"
      flexDirection={"column"}
      maxWidth={400}
      textAlign="center"
      justifyContent={"center"}
      margin="auto"
      padding={1}
      marginTop={1}

    >
      <Typography fontWeight={600} fontSize={30}>
        Signup
      </Typography>

      {error && <p style={{ color: 'red' }} >Something went wrong!!!</p>}


      <div style={{ display: "flex", gap: "1rem" }}>


        <TextField
          margin="normal"

          label="First Name"
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />

        <TextField
          margin="normal"

          label="Middle Name"
          name='middleName'
          value={formData.middleName}
          onChange={handleChange}
        />

      </div>

      <div style={{ display: "flex", gap: "1rem" }}>

        <TextField
          margin="normal"

          label="Last Name"
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />



        <TextField
          margin="normal"

          label="Organisation Name"
          name='organisationName'
          value={formData.organisationName}
          onChange={handleChange}
        />

      </div>

      <div style={{ display: "flex", gap: "1rem" }}>

        <TextField
          margin="normal"
          label="GST Number"
          name='gstNumber'
          value={formData.gstNumber}
          onChange={handleChange}
        />

        <TextField
          margin="normal"

          label="Mobile Number"
          name='mobileNumber'
          value={formData.mobileNumber}
          onChange={handleChange}
          inputProps={{ min: "10", max: "12", step: "1" }}
          required
        />

      </div>


      <TextField
        margin="normal"

        label="Address"
        name='address'
        value={formData.address}
        onChange={handleChange}
      />

      <div style={{ display: "flex", gap: "1rem" }}>

        <TextField
          margin="normal"

          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}

        />
        <TextField
          margin="normal"

          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}

        />
      </div>




      <Button
        className="loginButton"
        sx={{ marginTop: "5px" }}
        variant="contained" color="warning" type="submit">
        Submit
      </Button>



    </Box>
  </form>
);
};

