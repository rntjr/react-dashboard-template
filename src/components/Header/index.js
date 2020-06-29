import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Hidden, Menu, Avatar, MenuItem, Fade } from '@material-ui/core'
import useStyles from './style'

export default function Header() {

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar elevation={0}>
        <Toolbar variant="dense">
          <Box display="flex" flexGrow="1">
          </Box>
          <Box>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}><Avatar />
              Open with fade transition
      </Button>
            <Menu
              id="fade-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              style={{ width: "100%" }}
            >
              <MenuItem onClick={handleClose}><Avatar />Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}