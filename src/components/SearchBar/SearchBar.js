import {
  Divider, IconButton, Paper, TextField,
} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

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
      <TextField id="outlined-basic" label="Search Character" variant="outlined" fullWidth size='small' />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <ManageSearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
