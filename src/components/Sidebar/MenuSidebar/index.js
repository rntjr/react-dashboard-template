import React from 'react'
import { Box, Drawer } from '@material-ui/core'
import useStyles from './style'
import { SidebarContent } from './components'

export default function MenuSidebar(props) {
  const classes = useStyles()
  const { open, onClose, variant, ...rest } = props
  return (
    <Drawer
      onClose={onClose}
      open={open}
      variant={variant}
      anchor="left"
      classes={{
        //root: classes.drawer,
        paper: classes.drawerPaper
      }}
    >
      <Box
        className={classes.drawerContent}
      >
        <SidebarContent />
      </Box>
    </Drawer>
  )
}