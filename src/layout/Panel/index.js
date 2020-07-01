import React from 'react'
import { MainSidebar, MenuSidebar } from '../../components'
import { Box, CssBaseline, useMediaQuery, Typography, Container, Paper, useTheme } from '@material-ui/core'
import useStyles from './style'
import clsx from 'clsx'

export default function Panel() {
  const classes = useStyles()
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const handleSidebarOpen = () => {
    setOpenSidebar(!openSidebar);
  };
  const mobile = isDesktop ? true : false

  return (
    <Box
      display="flex"
      m={3}
    >
      <CssBaseline />
      <MenuSidebar
        onClose={handleSidebarOpen}
        open={openSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <MainSidebar
        onSidebarOpen={handleSidebarOpen}
      />
      <main
        className={clsx(
          classes.content,
          {
            [classes.contentShift]: (mobile ? openSidebar : false)
          }
        )}
      >
        <Paper>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus malesuada enim. Morbi eleifend tellus tortor. Maecenas et massa in dolor gravida porta a ut neque. Vestibulum a nulla auctor, lacinia turpis sed, suscipit ex. Maecenas placerat eu dolor sed pharetra. Nam in enim ac lacus dictum pellentesque vitae a erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras placerat fermentum justo non posuere.

            In volutpat dictum ipsum vel ultricies. Sed a sem ex. Integer scelerisque libero id ligula placerat rhoncus. In eu porttitor orci, at pretium ex. Quisque ligula nisi, sagittis nec scelerisque sit amet, mollis a nulla. Nulla porttitor lorem sed sapien pulvinar, ac elementum magna efficitur. Nullam mattis felis a quam vestibulum, eu scelerisque libero auctor. Cras libero massa, lacinia lacinia interdum a, lacinia a ex. Vestibulum ac viverra libero. Phasellus ac malesuada felis. In eget augue quam.

            Praesent id tempus orci, sit amet cursus nulla. Fusce nulla elit, sollicitudin eget ultricies et, eleifend eu sem. Maecenas justo sapien, molestie eget commodo nec, lobortis nec lorem. Vivamus at libero odio. Nulla facilisi. Nulla facilisi. Nullam nec aliquam sapien. Duis in semper est. Morbi nec imperdiet turpis. Aliquam at tortor ligula. Nulla facilisi. Phasellus odio risus, vulputate et sem quis, rhoncus pulvinar lectus. Sed lobortis pharetra enim, in volutpat leo sagittis in. Suspendisse quis sodales orci, eu iaculis sem. Praesent efficitur ut purus laoreet auctor. Proin venenatis quam ut pharetra venenatis.

            Nulla eros diam, cursus ac risus sodales, cursus lobortis ante. Proin ullamcorper laoreet placerat. Phasellus eu risus a enim consequat rhoncus. Nunc at nulla ut mi egestas bibendum. Maecenas non ante ac nisi pretium interdum. Integer sed leo velit. Vestibulum egestas orci eu nulla pulvinar, vitae sodales augue pretium. Phasellus euismod mattis tincidunt. Fusce vestibulum ac ante quis porttitor. Curabitur et augue ipsum. Duis commodo suscipit vehicula.

            Vivamus quam nisl, volutpat nec dapibus vulputate, lobortis eget arcu. Sed fermentum risus hendrerit efficitur sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius mi eget condimentum eleifend. Quisque et imperdiet dui. Aliquam congue posuere consequat. Nulla imperdiet urna a nibh pharetra fringilla. In rhoncus nunc a viverra volutpat. Pellentesque sodales pellentesque nunc et malesuada. Aenean id leo faucibus, vestibulum dolor non, volutpat risus.
          </Typography>
        </Paper>
      </main>
    </Box>
  )
}