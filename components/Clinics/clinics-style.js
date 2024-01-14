import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'clinic' })(theme => ({
  root: {
    position: 'relative',
  },
  parallaxBottom: {
    '& > div': {
      top: -100,
      overflow: 'visible'
    }
  },
  block: {
    position: 'relative',
    '& > *': {
      [theme.breakpoints.only('sm')]: {
        padding: theme.spacing(4, 2),
        display: 'inline-block',
        width: '49%'
      }
    }
  },
  map: {
    background: '#dedede',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: 700,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(-6),
      height: 320
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
