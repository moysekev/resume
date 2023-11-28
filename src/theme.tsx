import { createTheme } from '@mui/material/styles';
// import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


// Reeding
// Green a5bead, 688a7a, 7a998a, 567968, 344c42,  lighter : b5cfbd
// Blue                  a0b4c0      dark : 254254
// Red official logo : ec2024,  on kite screenshot : b00717

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#416e88',
    },
    secondary: {
      main: '#344c42',
    },
    info:{
      main: '#b5cfbd',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // MuiChip: {
    //   styleOverrides: {
    //     root: {
    //       // Some CSS
    //       backgroundColor: '#b5cfbd'
    //     },
    //   }
    // },
  },
});

export default theme;
