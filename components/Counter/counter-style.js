import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })((theme, _params, classes) => ({
  counterWrap: {
    margin: theme.spacing(3, 0)
  },
  deco: {
    '&:after': {
      content: '""',
      borderLeft: `1px solid ${theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.main}`,
      width: 50,
      height: '100%',
      position: 'absolute',
      backgroundColor: theme.palette.mode === 'light' ? theme.palette.background.paper : theme.palette.background.default,
      top: 0,
      right: -20,
      transform: theme.direction === 'ltr' ? 'skew(-30deg, 0)' : 'skew(30deg, 0)',
      [theme.breakpoints.down('md')]: {
        right: -50
      }
    },
    '& p': {
      backgroundColor: theme.palette.mode === 'light' ? theme.palette.secondary.light : theme.palette.secondary.main,
      color: theme.palette.mode === 'light' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    }
  },
  text: {},
  counterItem: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    '& p': {
      fontSize: 22,
      textTransform: 'capitalize',
      borderRadius: '40px 0 0 40px',
      minWidth: 150,
      padding: theme.spacing(0, 3),
      [theme.breakpoints.up('sm')]: {
        textAlign: 'left'
      },
      [theme.breakpoints.down('lg')]: {
        minWidth: 100,
        fontSize: 18
      },
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    [`& .${classes.text}`]: {
      textAlign: 'center',
      '& h3': {
        fontSize: 36
      },
      '& h2': {
        fontSize: 62
      },
      '& h2, & h3': {
        position: 'relative',
        fontWeight: theme.typography.fontWeightBold,
        [theme.breakpoints.down('lg')]: {
          fontSize: 30
        }
      }
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
