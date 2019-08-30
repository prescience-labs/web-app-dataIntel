import { makeStyles } from '@material-ui/styles';

export const feedbackStyle = makeStyles(theme => ({
  rootStyle: {
    margin: '0',
  },
  buttonStyle: {
    marginTop: '1.5rem',
  },
  textAreaStyle: {
    width: '90%',
  },
  submittedStyle: {
    height: '30vh',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submitStyle: {
    padding: '1rem',
  },
  imageStyle: {
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
  },
  fieldsetStyle: {
    padding: '0',
    margin: '0',
  },
}));
