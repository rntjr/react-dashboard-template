import React from 'react'
import { Box, Drawer, Avatar, Tooltip, IconButton } from '@material-ui/core'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import useStyles from './style'

export default function MainSidebar(props) {
  const { onSidebarOpen, ...rest } = props
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
    >
      <Box
        flexGrow="1"
        m={1}
      >
        <Box
          className={classes.boxButton}
          display="flex"
          justifyContent="center"
        >
          <IconButton
            size="small"
            className={classes.buttonCustom}
            onClick={onSidebarOpen}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        flexGrow="1"
        m={1}
      >
        <Box
          className={classes.boxButton}
          display="flex"
          justifyContent="center"
        >
          <Tooltip title="Apps" placement="right">
            <IconButton size="small" className={classes.buttonCustom}>
              <DashboardRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          className={classes.boxButton}
          display="flex"
          justifyContent="center"
        >
          <Tooltip title="Home" placement="right">
            <IconButton size="small" className={classes.buttonCustom}>
              <HomeRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          className={classes.boxButton}
          display="flex"
          justifyContent="center"
        >
          <Tooltip title="Chat" placement="right">
            <IconButton size="small" className={classes.buttonCustom}>
              <ChatBubbleRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          className={classes.boxButton}
          display="flex"
          justifyContent="center"
        >
          <Tooltip title="Notifications" placement="right">
            <IconButton size="small" className={classes.buttonCustom}>
              <NotificationsRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          className={classes.boxButton}
          display="flex"
          justifyContent="center"
        >
          <Tooltip title="Explore" placement="right">
            <IconButton size="small" className={classes.buttonCustom}>
              <ExploreRoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box
        m={1}
      >
        <Box
          display="flex"
          justifyContent="center"
          pb={1}
        >
          <Tooltip title="Light/Night" placement="right">
            <IconButton size="small" className={classes.buttonCustom}>
              <Brightness4RoundedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip title="Profile" placement="right">
          <IconButton
            size="small"
          >
            <Avatar className={classes.avatar} />
          </IconButton>
        </Tooltip>
      </Box>
    </Drawer>
  )
}