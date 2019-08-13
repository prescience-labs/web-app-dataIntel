import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const appTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#06d5e8',
    },
    secondary: {
      main: '#22f9c7',
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      'HelveticaNeue-Light',
      'Helvetica Neue Light',
      'Helvetica Neue',
      'Helvetica',
    ].join(','),
    fontWeight: '300',
  },
  overrides: {
    MuiButton: {
      text: {
        background: '#06d5e8',
        boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        borderBottom: '1px solid #e5eaed',
        borderRadius: '100px',
        fontSize: '25px',
        padding: '10px 25px',
        border: 'none',
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
      },
    },
  },
});
