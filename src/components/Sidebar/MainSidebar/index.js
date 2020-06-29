import React from 'react'
import { Box, Drawer, Button, Avatar, Tooltip } from '@material-ui/core'
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ChatBubbleRoundedIcon from '@material-ui/icons/ChatBubbleRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import useStyles from './style'

export default function MainSidebar() {
  const classes = useStyles()
  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
    >
      <Box
        flexGrow="1"
        m={1}
      />
      <Box
        flexGrow="1"
        m={1}
      >
        <Box
          className={classes.boxButton}
        >
          <Tooltip title="Apps" placement="right">
            <Button className={classes.buttonCustom}>
              <DashboardRoundedIcon />
            </Button>
          </Tooltip>
        </Box>
        <Box
          className={classes.boxButton}
        >
          <Tooltip title="Home" placement="right">
            <Button className={classes.buttonCustom}>
              <HomeRoundedIcon />
            </Button>
          </Tooltip>
        </Box>
        <Box
          className={classes.boxButton}
        >
          <Tooltip title="Chat" placement="right">
            <Button className={classes.buttonCustom}>
              <ChatBubbleRoundedIcon />
            </Button>
          </Tooltip>
        </Box>
        <Box
          className={classes.boxButton}
        >
          <Tooltip title="Notifications" placement="right">
            <Button className={classes.buttonCustom}>
              <NotificationsRoundedIcon />
            </Button>
          </Tooltip>
        </Box>
      </Box>
      <Box
        m={1}
      >
        <Tooltip title="Profile" placement="right">
          <Button
            className={classes.buttonAvatar}
            size="small"
          >
            <Avatar className={classes.avatar} />
          </Button>
        </Tooltip>
      </Box>
    </Drawer>
  )
}