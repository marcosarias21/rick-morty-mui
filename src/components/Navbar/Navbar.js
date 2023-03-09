import {
  AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography,
} from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavLinkDrawer from './NavLinkDrawer';
import { navLinks } from '../../helpers/NavLinks';
import { SearchBar } from '../SearchBar';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { md: 'none' } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Rick & Morty - Material UI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map(item => <Button key={item.routeName} component='a' href={item.path} color='inherit' sx={{ transition: '0.2s', ':hover': { transform: 'scale(1.1)' } }}>{item.routeName}</Button>)}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <NavLinkDrawer setOpen={setOpen} navLinks={navLinks} />
      </Drawer>
    </Box>
  );
};

export default Navbar;
