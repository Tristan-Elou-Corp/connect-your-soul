import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseFormules = () => {
    setAnchorEl(null);
    window.location.href = "/formules";
  };

  const handleCloseContact = () => {
    setAnchorEl(null);
    window.location.href = "/contact";
  };

  const handleCloseHome = () => {
    setAnchorEl(null);
    window.location.href = "/";
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ color: "#1D4851" }}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleCloseHome}>Home</MenuItem>
        <MenuItem onClick={handleCloseFormules}>Formules</MenuItem>
        <MenuItem onClick={handleCloseContact}>Contact</MenuItem>
      </Menu>
    </div>
  );
}