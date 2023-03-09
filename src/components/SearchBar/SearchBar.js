import {
  Divider, IconButton, InputBase, Paper,
} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      elevation='0'
      sx={{
        p: '2px 4px',
        display: { xs: 'flex', sm: 'none', md: 'flex' },
        border: '1px solid gray',
        alignItems: 'center',
        width: {
          xs: 235, sm: 235, md: 300, lg: 400,
        },
        background: 'white',
        color: 'red',
      }}
      >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Character"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <ManageSearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
