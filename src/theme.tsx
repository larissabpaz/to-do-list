import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#510c76',
    },
    secondary: {
      main: '#f0ec1c',
    },
    background: {
      default: '#f4f4f4',
      paper: '#ffffff',
    },
    text: {
      primary: '#444444',
      secondary: '#ffffff',
    },
  },
});

export default theme;
