import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';

const SelectTypePj = () => {
  return (
    <FormControl sx={{ width: 290 }} >
      <InputLabel id="demo-simple-select-label">Filter By Status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Filter By Status"
      >
        <MenuItem value={10}>Died</MenuItem>
        <MenuItem value={20}>Alive</MenuItem>
        <MenuItem value={30}>Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectTypePj;
