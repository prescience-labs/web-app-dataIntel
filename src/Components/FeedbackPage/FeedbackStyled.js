import { makeStyles } from '@material-ui/styles';

export const feedbackStyle = makeStyles(theme => ({
  rootStyle: {
    margin: '10px',
  },
  buttonStyle: {
    marginTop: '4rem',
  },
  textAreaStyle: {
    width: '90%',
  },
  submittedStyle: {
    display: 'flex',
    height: '50vh',
    flexDirection: 'column ',
    alignItems: 'center',
    justifyContent: 'center',
    texAlight: 'center',
  },
  thanksStyle: {
    marginBottom: '5rem',
  },
  h4ThanksStyle: {
    marginBottom: '1rem',
  },
}));
