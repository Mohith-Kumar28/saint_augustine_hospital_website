import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'facilites' })((theme, _params, classes) => ({
  root: {
    paddingBottom: theme.spacing(20),
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      padding: theme.spacing(15, 0, 10),
    }
  },
  title: {},
  carouselHandle: {
    height: 380,
    position: 'relative',
    zIndex: 10
  },
  carouselWrap: {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    overflow: 'hidden',
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  carouselProp: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
    '& div': {
      width: theme.direction === 'ltr' ? 300 : 480
    }
  },
  floatingTitle: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: theme.spacing(5),
    [theme.breakpoints.up('lg')]: {
      left: theme.spacing(3),
      top: theme.spacing(-10),
    },
    [theme.breakpoints.up(1400)]: {
      left: theme.spacing(10),
    },
    [`& .${classes.title}`]: {
      [theme.breakpoints.up('md')]: {
        marginRight: theme.spacing(5),
      },
      [theme.breakpoints.up('lg')]: {
        float: 'right',
      },
      [theme.breakpoints.up(1400)]: {
        marginRight: theme.spacing(-5)
      }
    }
  },
  arrow: {
    direction: theme.direction === 'rtl' ? 'rtl' : 'ltr',
    marginTop: theme.direction === 'rtl' ? 200 : 140,
    textAlign: 'left',
    position: 'relative',
    zIndex: 10,
    '& button': {
      background: theme.palette.background.paper,
      margin: theme.spacing(0.5),
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    },
    [theme.breakpoints.down(1280)]: {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'none',
      marginTop: 560
    },
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
