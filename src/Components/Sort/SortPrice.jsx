import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const SortPrice = ({ value, onChange }) => (
  <FormControl sx={{ minWidth: 200 }}>
    <InputLabel id="sort-price-label">Sort by Price</InputLabel>
    <Select
      labelId="sort-price-label"
      value={value}
      label="Sort by Price"
      onChange={onChange}
    >
      <MenuItem value="none">None</MenuItem>
      <MenuItem value="asc">Low to High</MenuItem>
      <MenuItem value="desc">High to Low</MenuItem>
    </Select>
  </FormControl>
);

export default SortPrice;