import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Employees } from './Employees';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const View   = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  useEffect(() => {
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setContactNumber(localStorage.getItem('contactNumber'))
  }, [])

  return (
      <FormContainer>
        <Box sx={{margin: '1rem', fontSize: '2rem'}}>View Contact</Box>
      <form>
        <div>
        <TextField
          label="Name"
          value={name}
          inputProps={{ readOnly: true }}
        />
        </div>
        <div style={{marginTop: '2rem'}}>
        <TextField
          label="Email"
          value={email}
          inputProps={{ readOnly: true }}
        />
        </div>
        <div style={{marginTop: '2rem'}}>
        <TextField
              label="Contact Number"
              value={contactNumber}
              inputProps={{ readOnly: true }}
            />
        </div>
        <div style={{display: 'flex', marginTop: '2rem'}}>
            <Link to='/'>
                <Button variant="contained" color="primary">
                   Back
                </Button>
            </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default View;