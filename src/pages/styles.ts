import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme:Theme)=> createStyles({
    root: {
      marginTop: 20,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    crytoButton: {
      margin: theme.spacing(1),
    },
}));