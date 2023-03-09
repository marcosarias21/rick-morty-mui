import {
  Divider, IconButton, InputAdornment, Paper, TextField,
} from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: { xs: 'flex', sm: 'none', md: 'flex' },
        border: '1px solid gray',
        alignItems: 'center',
        width: {
          xs: 235, sm: 235, md: 300, lg: 400,
        },
      }}
      >
      <TextField
      placeholder="Search Character"
      sx={{
        paddingLeft: '0px',
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton sx={{ paddingLeft: 0, cursor: 'normal' }} disableRipple>
              <PersonSearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }} id="outlined-basic" variant="outlined" fullWidth size='small' />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
