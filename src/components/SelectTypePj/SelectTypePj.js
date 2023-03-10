import {
  FormControl, InputLabel, MenuItem, Select,
} from '@mui/material';
import { useCharacterBook } from '../../store/characterStore';

const SelectTypePj = () => {
  const { statusSelect, status } = useCharacterBook(state => ({
    status: state.status,
    statusSelect: state.statusSelect,
  }));

  const handleChange = (e) => {
    statusSelect(e.target.value);
  };

  return (
    <FormControl sx={{ width: 290 }} >
      <InputLabel id="demo-simple-select-label">Filter By Status</InputLabel>
      <Select
        onChange={handleChange}
        labelId="demo-simple-select-label"
        value={status}
        id="demo-simple-select"
        label="Filter By Status"
      >
        <MenuItem value=''>All</MenuItem>
        <MenuItem value='dead'>Died</MenuItem>
        <MenuItem value='alive'>Alive</MenuItem>
        <MenuItem value='unknown'>Unknown</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectTypePj;
