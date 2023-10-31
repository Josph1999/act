import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DefaultSelect({onChange, value, name}) {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          name={name}
          label="Age"
          onChange={onChange}
          variant='filled'
        >
          <MenuItem value={'technic'}>Technic</MenuItem>
          <MenuItem value={'car'}>Car</MenuItem>
          <MenuItem value={'real-estate'}>Real Estate</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}