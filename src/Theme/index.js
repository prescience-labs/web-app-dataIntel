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
    fontFamily: ['Helvetica Neue, Montserrat'].join(','),
  },
  overrides: {
    MuiButton: {
      text: {
        background: 'linear-gradient(-45deg, #22f9c7 0%, #06d5e8 100%)',
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
