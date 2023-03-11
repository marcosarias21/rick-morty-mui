import {
  Divider, IconButton, InputAdornment, Paper, TextField,
} from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useCharacterBook } from '../../store/characterStore';

const SearchBar = () => {
  const [event, setEvent] = useState('');
  const { searchName } = useCharacterBook();
  return (
    <Paper
      elevation={0}
      component="form"
      sx={{
        background: 'inherit',
        p: '2px 4px',
        display: { xs: 'flex', sm: 'none', md: 'flex' },
        alignItems: 'center',
        width: {
          xs: 235, sm: 235, md: 300, lg: 400,
        },
      }}
      >
      <TextField
      placeholder="Search By Name"
      sx={{
        paddingLeft: '0px',
      }}
      onChange={(e) => setEvent(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton sx={{ paddingLeft: 0, cursor: 'normal' }} disableRipple>
              <PersonSearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }} id="outlined-basic" variant="outlined" fullWidth size='small' />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={() => searchName(event)}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
