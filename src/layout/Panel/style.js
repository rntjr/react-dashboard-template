import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  root: {

  },
  content: {
    marginLeft: theme.spacing(6)
  },
  contentShift: {
    marginLeft: theme.spacing(34),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    })
  }
}))