import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  drawerPaper: {
    [theme.breakpoints.up("lg")]: {
      width: theme.spacing(35),
    },
    width: theme.spacing(28)
  },
  drawerContent: {
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(3),
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(3)
    },
    marginTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  },
  topbar: {
    //backgroundColor: "#f4f1de",
    padding: theme.spacing(1),
  },
  buttomMenu: {
    borderRadius: theme.spacing(1)
  },
  divider: {
    marginLeft: theme.spacing(9),
    marginRight: theme.spacing(2)
  }
}))