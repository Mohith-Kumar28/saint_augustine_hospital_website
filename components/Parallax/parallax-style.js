import { makeStyles } from 'tss-react/mui';

const parallaxStyles = makeStyles({ uniqId: 'parallax' })((theme, _params, classes) => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'visible',
    left: 0,
    zIndex: 0,
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& [class="figure"]': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      '& > div': {
        position: 'absolute',
      }
    },
  },
  parallaxOval: {
    borderRadius: '50%',
    left: '-12%',
    position: 'absolute',
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  parallaxPrimary: {
    background: theme.palette.mode === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    width: 700,
    height: 705,
    opacity: 0.2,
  },
  banner: {
    [`& .${classes.parallaxPrimary}`]: {
      right: 100,
      top: 100,
    }
  },
  about: {
    top: -350,
    [`& .${classes.parallaxPrimary}`]: {
      top: 190,
    }
  },
  dotsWrap: {
    top: -100,
    overflow: 'hidden'
  },
  testi: {
    top: -100
  },
  parallaxDot: {
    fill: theme.palette.text.disabled,
    width: 845,
    height: 1099,
    opacity: 0.2,
    top: 90,
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute',
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default parallaxStyles;
