import { makeStyles } from 'tss-react/mui';

const footerStyles = makeStyles({ uniqId: 'footer' })((theme, _params, classes) => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  footer: {
    position: 'relative',
    paddingBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        '&:hover': {
          color: theme.palette.primary.main
        }
      }
    },
    '& p': {
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 3)
      }
    },
    [`& .${classes.accordionRoot}`]: {
      margin: '0 auto',
      marginTop: theme.spacing(2),
    }
  },
  title: {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
      padding: theme.spacing(0, 3)
    },
    '& img': {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 48,
      marginRight: theme.spacing(),
    },
    '& h6': {
      color: theme.palette.text.disabled,
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      textAlign: 'center'
    }
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      background: theme.palette.divider,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    [`& .${classes.icon}`]: {
      top: 21,
      position: 'relative',
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main} !important`,
      '& legend': {
        top: 5,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('lg')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    maxWidth: 480,
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default footerStyles;
