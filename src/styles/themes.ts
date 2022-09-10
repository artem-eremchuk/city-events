import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
          main: "#000000",
          light: "#FFFFFF",
          dark: "#FFFFFF",
        },
        secondary: {
          main: "#FFFFFF",
          dark: "#FFFFFF",
          light: "#FFFFFF",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#FFFFFF",
          disabled: "#ffffff",
        },
        background: {
          paper: "#1C1C33",
          default: "#FFFFFF",
        }
    },
    typography: {
      fontFamily: "roboto",
      button: {
          fontSize: 12
      },
      h1: {
          fontSize: 64
      },
      h2: {
          fontSize: 48
      },
      h3: {
          fontSize: 32
      },
      h4: {
          fontSize: 24,
          fontWeight: 500,
      },
      body1: {
          fontSize: 18,
          fontWeight: 400,
      },
    }
});

theme = responsiveFontSizes(theme);

export default theme;