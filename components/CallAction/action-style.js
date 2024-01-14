import { makeStyles } from 'tss-react/mui';
import { lighten, darken } from '@mui/material/styles';

const useStyles = makeStyles({ uniqId: 'cta' })(theme => ({
  root: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  background: {
    fill: theme.palette.mode === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(-50),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)'
  },
  button: {
    [theme.breakpoints.up('sm')]: {
      height: 64,
      fontSize: 18,
    },
    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      fontSize: 14
    }
  },
  paper: {
    padding: theme.spacing(4),
    border: `2px solid ${theme.palette.primary.main}`,
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 10),
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5)
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 1),
      textAlign: 'center'
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        fontSize: 28,
        marginBottom: theme.spacing(2)
      },
    },
    '& p': {
      fontSize: 24,
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(5)
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        marginBottom: theme.spacing(3)
      },
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none'
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
