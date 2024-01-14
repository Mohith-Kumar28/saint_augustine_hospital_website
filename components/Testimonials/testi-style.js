import { makeStyles } from 'tss-react/mui';

const testiStyles = makeStyles({ uniqId: 'testi' })((theme, _params, classes) => ({
  root: {
    width: '100%',
    position: 'relative',
    padding: theme.spacing(10, 0),
    zIndex: 10,
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(15),
    }
  },
  carousel: {
    position: 'relative',
    zIndex: 3,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-20),
    },
    '& ul[class*="slick-dots"]': {
      bottom: theme.spacing(-8),
      left: -240,
      '& li': {
        width: 10,
        height: 10,
        transition: 'width 0.3s ease',
        background: theme.palette.primary.light,
        borderRadius: 15,
        margin: theme.spacing(0, 0.5),
        '&[class="slick-active"]': {
          width: 35
        },
        '& button': {
          opacity: 0
        }
      }
    }
  },
  item: {
    padding: theme.spacing(2),
    '&:focus': {
      outline: 'none'
    }
  },
  title: {},
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
      },
    }
  },
  itemPropsFirst: {
    width: theme.direction === 'rtl' ? 500 : 160,
  },
  itemPropsLast: {
    width: theme.direction === 'rtl' ? 160 : 300,
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default testiStyles;
