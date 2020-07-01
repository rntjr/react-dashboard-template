import React from 'react'
import { AppBar, Toolbar, Box } from '@material-ui/core'
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

          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}