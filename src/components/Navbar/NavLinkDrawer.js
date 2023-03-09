import {
  Box,
  Divider,
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import { SearchBar } from '../SearchBar';

const NavLinkDrawer = ({ navLinks, setOpen }) => {
  return (
    <Box sx={{ width: 250, mt: 2 }}>
      <nav>
        <List>
          {navLinks.map(item => (
            <ListItem key={item.routeName} disablePadding>
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText>{item.routeName}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mb: 5 }} />
        <Box>
          <SearchBar />
        </Box>
      </nav>
    </Box>
  );
};

export default NavLinkDrawer;
