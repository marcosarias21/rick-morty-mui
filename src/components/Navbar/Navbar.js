import {
  AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography,
} from '@mui/material';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { navLinks } from '../../helpers/NavLinks';
import { SearchBar } from '../SearchBar';
import NavLinkPopover from '../NavLinkPopover/NavLinkPopover';
import NavLinkDrawer from './NavLinkDrawer';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ position: 'sticky', top: 0, zIndex: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: 'transparent', backdropFilter: 'blur(10px)' }}>
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
          <Typography variant="h6" component="div" color='primary' sx={{ fontWeight: 'bold' }}>
            Rick & Morty - Material UI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            <SearchBar />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map(item => <Button key={item.routeName} component={NavLink} to={item.path} color='primary' sx={{ transition: '0.2s', ':hover': { transform: 'scale(1.1)' } }}>{item.routeName}</Button>)}
            <NavLinkPopover link='Locations' />
            <NavLinkPopover link= 'Episodes' />
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
