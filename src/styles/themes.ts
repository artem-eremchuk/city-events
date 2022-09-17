import { 
  createTheme, 
  responsiveFontSizes 
} from '@mui/material/styles';

let theme = createTheme({
    spacing: 1,
    palette: {
      primary: {
        main: "#FCFCFD",
      },
      secondary: {
        main: "#EA3A2C",
      },
      text: {
        primary: "#23262F",
        secondary: "#777E91",
      },
    },
    typography: {
      fontFamily: "PoppinsMedium, sans-serif",
      body1: {
        fontSize: 14,
        fontWeight: 500,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 320,
        md: 768,
        lg: 1280,
        xl: 1440,
      },
    },
});

theme = responsiveFontSizes(theme);

export default theme;