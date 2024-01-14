import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'about' })(theme => ({
  root: {
    '& blockquote': {
      fontSize: 20,
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
      borderLeft: '4px solid',
      borderLeftColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#D8D8D8',
      paddingLeft: theme.spacing(2),
      margin: theme.spacing(5, 4, 0),
      [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        margin: 0,
        fontSize: 20,
        lineHeight: '32px'
      }
    },
    '& h4': {
      [theme.breakpoints.down('md')]: {
        textAlign: 'center',
        marginTop: theme.spacing(-3)
      }
    },
    '& .MuiContainer-root': {
      padding: 0
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
