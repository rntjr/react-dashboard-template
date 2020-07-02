import React from 'react'
import { Box, Typography, CssBaseline, Paper } from '@material-ui/core'
import { MainSidebar, DrawerSidebar } from '../../components'

//Styles
import useStyles from './style'
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Icons

export default function Panel() {

  //Variables
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const [openDrawer, setOpenDrawer] = React.useState(false)

  // Functions
  const drawerToggle = () => {
    setOpenDrawer(!openDrawer)
  }

  return (
    <Box>
      <MainSidebar openDrawer={drawerToggle} />
      <DrawerSidebar open={openDrawer} onClose={drawerToggle} />
      <main className={classes.content}>
        <CssBaseline />
        <Typography component={Paper}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis nisl quis sollicitudin viverra. Praesent ultricies lectus non mi elementum accumsan. Ut sed egestas lorem. Curabitur neque felis, pretium et congue quis, iaculis a lorem. Pellentesque rutrum porttitor tellus, in facilisis ex imperdiet vel. Integer sollicitudin faucibus nunc nec rutrum. Aenean mattis diam in sem efficitur scelerisque. Vestibulum hendrerit pellentesque risus, sit amet posuere elit luctus ac.

          Quisque id enim nunc. Nulla facilisi. Aenean accumsan volutpat turpis nec iaculis. In congue ligula metus, mollis tempus risus volutpat vitae. Mauris ut libero ante. Pellentesque ac ligula lobortis, convallis erat vitae, cursus metus. Vestibulum nec dictum mi.

          Maecenas bibendum eros dui, vel maximus orci auctor in. In condimentum elit in euismod convallis. Aenean lacinia sollicitudin egestas. Donec sodales ante porta porttitor faucibus. Fusce a elit vel leo volutpat tempus pulvinar vel odio. Aenean non suscipit tortor. Phasellus fermentum tincidunt ante, nec imperdiet massa varius ac. Duis eu egestas augue. Mauris accumsan tincidunt elit, ac tincidunt felis dapibus eu. Duis pretium tempor neque, eget tincidunt orci tristique vitae. Proin at nibh nibh. Sed sed lacus quis nibh tincidunt facilisis vel a nisl. Suspendisse eget ex nibh. Vivamus ultricies purus et metus viverra pulvinar.

          Pellentesque accumsan efficitur vulputate. Suspendisse tristique orci nec velit mollis iaculis non in sem. Cras vel massa convallis, ultrices erat non, mollis odio. Donec in purus condimentum, aliquet erat a, venenatis risus. Curabitur pharetra, elit id pharetra elementum, eros sem dapibus ipsum, a molestie augue odio ut metus. Sed ac pulvinar magna. Morbi at nibh luctus, pulvinar velit eget, facilisis nibh. Aenean sollicitudin efficitur tincidunt. Vivamus vestibulum efficitur neque, in vehicula erat facilisis sed. Phasellus aliquam in quam in gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec maximus tellus. Proin congue enim non eros finibus viverra. Aenean tempus nunc nisl, eget viverra eros placerat vel. Aenean varius dapibus turpis quis viverra.

          Pellentesque in pretium nunc. Donec et odio eget nulla pulvinar condimentum. Nunc molestie sit amet sapien et aliquet. Fusce sed magna eu quam accumsan pretium. Integer nec mollis risus. Nullam gravida odio mi, tempus blandit dui vehicula ac. Aliquam faucibus feugiat ligula. Morbi ante sapien, tristique et bibendum sed, semper at sem. Quisque sed lacinia tellus. Nunc turpis turpis, egestas eu sodales ac, porttitor sed sem. Pellentesque vitae neque nulla. Ut quis vehicula sapien. Fusce volutpat felis sed sem egestas, quis dignissim diam scelerisque. Aliquam erat volutpat.
        </Typography>
      </main>
    </Box>
  )
}