import { makeStyles } from '@material-ui/core/styles'


export default makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    zIndex: theme.zIndex.drawer
  },
  buttonAvatar: {
    borderRadius: theme.spacing(16),
    minWidth: theme.spacing(0)
  },
  buttonCustom: {
    minWidth: theme.spacing(0)
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  boxButton: {
    marginBottom: theme.spacing(3)
  }
}))