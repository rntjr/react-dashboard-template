import React from 'react'
// Core
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
// Icons
import InboxIcon from '@material-ui/icons/Inbox'
import MailIcon from '@material-ui/icons/Mail'

export default function DrawerSidebar(props) {
  const { open, onClose } = props
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}