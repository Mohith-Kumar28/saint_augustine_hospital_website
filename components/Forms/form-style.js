import { makeStyles } from 'tss-react/mui';

const contactStyles = makeStyles({ uniqId: 'form' })((theme, _params, classes) => ({
  formWrap: {
    marginTop: theme.spacing(10),
    position: 'relative',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('lg')]: {
        fontSize: 36
      }
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    [`&.${classes.logoHeader}`]: {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  desc: {
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      padding: theme.spacing(0, 10),
    }
  },
  input: {
    width: '100%'
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 15, 10),
    }
  },
  btnArea: {
    marginTop: theme.spacing(5),
    '& label': {
      textAlign: 'left',
      position: 'relative'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      '& button': {
        marginTop: theme.spacing(5)
      }
    },
    '& span': {
      '& a': {
        color: theme.palette.primary.main
      }
    }
  },
  decoration: {
    position: 'fixed',
    width: '100%',
    height: '120%',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  oval: {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    width: 1000,
    height: 1000,
    borderRadius: '50%',
    position: 'absolute',
    left: '-40%',
    top: -100,
    opacity: 0.2
  },
  capsul: {
    width: 900,
    height: 500,
    borderRadius: 500,
    transform: 'rotate(-30deg)',
    position: 'absolute',
    opacity: 0.75,
    backgroundImage: theme.palette.mode === 'light' ? `linear-gradient(144deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)` : `linear-gradient(144deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
    [theme.breakpoints.down('lg')]: {
      opacity: 0
    }
  },
  circle: {
    width: 700,
    height: 700,
    borderRadius: '50%',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    position: 'absolute',
    [theme.breakpoints.down('lg')]: {
      opacity: 0
    }
  },
  decoTop: {
    [`& .${classes.capsul}`]: {
      top: -200,
      right: '-50%'
    },
    [`& .${classes.circle}`]: {
      top: '-30%',
      right: '-30%'
    }
  },
  decoBottom: {
    [`& .${classes.capsul}`]: {
      bottom: '-30%',
      left: '-50%'
    },
    [`& .${classes.circle}`]: {
      bottom: '-30%',
      right: '-30%'
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: 60,
    top: -60,
    [theme.breakpoints.down('md')]: {
      left: 'calc(50% - 40px)',
      top: -120,
    },
    '& i': {
      fontSize: 36,
      color: theme.palette.text.disabled
    },
    '& > span i:first-of-type': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-of-type': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 28,
        opacity: 1,
      },
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default contactStyles;
