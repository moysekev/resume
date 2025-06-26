import { createTheme } from '@mui/material/styles';
// import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


// https://mdigi.tools/lighten-color/#7a998a
// Green 7a998a, 50% lighter : #bcccc4
export const green = {
  100: '#ebf0ed', //"85%"
  200: '#dee5e2', //"75%"
  300: '#bcccc4', //"50%"
  500: '#7a998a',
  A700: '#3c4e45'
};

export const blue = {
  300: '#cfd9df',
  500: '#a0b4c0',
  A700: '#465c6a'
};

// Blue                  a0b4c0 50% light : #cfd9df
// Red official logo : ec2024,  on kite screenshot : b00717

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: blue.A700,
    }
  },
  typography: {
    // fontSize: 14,
    // htmlFontSize: 16,
    body1: {
      fontSize: 12,
      "@media print": {
        fontSize: 12,
      }
    },
    // body2: {
    //   fontSize: 14,
    //   "@media print": {
    //     fontSize: 13,
    //   }
    // },
    subtitle1: {
      fontSize: 14,
      "@media print": {
        fontSize: 14,
      }
    },
    subtitle2: {
      fontSize: 12,
      "@media print": {
        fontSize: 12,
      }
    },
    h6: {
      fontSize: 14,
    }
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          // Some CSS
          // backgroundColor: '#b5cfbd',
          fontSize: 10,
          "@media print": {
            fontSize: 10,
          }
        },
      }
    },
  },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    green: theme.palette.augmentColor({
      color: {
        main: green[500],
      },
      name: 'green',
    }),
    light_green: theme.palette.augmentColor({
      color: {
        main: green[200],
      },
      name: 'light_green',
    }),
  },
});

// theme.typography.body1 = {
//   '@media print': {
//     fontSize: '5',
//   }
// }

export default theme;
