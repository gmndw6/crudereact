import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {v4 as uuid} from 'uuid';
import { Employees } from './Employees';
import { useNavigate } from 'react-router-dom';
const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});

const Add = () => {
  const [firstName, setFirstName] = useState('');
  const [age, setAge] = useState('');
  let history = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    // const ids = uuid();
    // let uniqueId = ids.slice(0,8)
    var uniqueId = Employees.length + 1
    var a = firstName;
    var b= age;

    Employees.push({id: uniqueId.toString(), name : a, age: b})
    console.log(Employees);

    history("/")
    // Reset form fields
    setFirstName('');
    setAge('');
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <div>
        <TextField
          label="First Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        </div>
        <div style={{marginTop: '2rem'}}>
        <TextField
          label="Age"
          value={age}
          onChange={(event) => setAge(event.target.value)}
          required
        />
        </div>
        <div style={{display: 'flex', marginTop: '2rem'}}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
        </div>
      </form>
    </FormContainer>
  );
};

export default Add;