import * as React from 'react';
import {
   AppBar,
   Box,
   Container,
   Divider,
   IconButton,
   Menu,
   MenuItem,
   Toolbar,
   Typography
} from '@mui/material';
import { styled } from "@mui/system";
import { AccountCircle /*, MenuIcon */} from '@mui/icons-material';

const Offset = styled("div")(({ theme }: any) => theme.mixins.toolbar);

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="absolute" enableColorOnDark={true}>
        <Toolbar variant="dense">
          <Container
            maxWidth="lg"
            sx={{ display: `flex`, alignItems: 'center', justifyContent: `space-between` }}
          >
            <Typography component="div" sx={{ flexGrow: 1 }}>This is a header</Typography>
            <div>
              <IconButton color="inherit" onClick={handleMenu}>
                <AccountCircle />
              </IconButton>
              <Menu 
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Box sx={{ paddingTop: '6px', paddingBottom: '6px', paddingLeft: '16px', paddingRight: '16px', fontSize: '0.875rem', fontWeight: 'bold' }}>user@name.com</Box>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem dense={true} onClick={handleClose}>Profile</MenuItem>
                <MenuItem dense={true} onClick={handleClose}>My account</MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem dense={true} onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default Header;