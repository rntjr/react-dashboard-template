import React from 'react'
import { Header, MainSidebar } from '../../components'
import { Box, CssBaseline } from '@material-ui/core'

export default function Panel() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <MainSidebar />
    </Box>
  )
}