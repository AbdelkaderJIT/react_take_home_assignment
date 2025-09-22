import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ categories, value, onChange }) => (
  <FormControl sx={{ minWidth: 200 }}>
    <InputLabel id="category-select-label">Category</InputLabel>
    <Select
      labelId="category-select-label"
      value={value}
      label="Category"
      onChange={onChange}
    >
      <MenuItem value="all">All</MenuItem>
      {categories.map(cat => (
        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default Filter;