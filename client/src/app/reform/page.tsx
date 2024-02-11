'use client'

import React from 'react';
import { Button, TextField } from '@mui/material';

const ReformPartyPage = () => {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
  });

  return (
    <form>
      <TextField
        name="name"
        label="Name"
        value={values.name}
      />
      <TextField
        name="email"
        label="Email"
        value={values.email}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ReformPartyPage;