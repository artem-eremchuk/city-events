import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
          main: "#000000",
          light: "#FFFFFF",
          dark: "#000000",
        },
        secondary: {
          main: "#FFFFFF",
          dark: "#000000",
          light: "#FFFFFF",
        },
        text: {
          primary: "#000000",
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