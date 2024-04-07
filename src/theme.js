import { red, yellow, green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#f8f5c3",
    },
    secondary: {
      main: "#00b95f",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
