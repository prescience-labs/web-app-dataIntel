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
});
