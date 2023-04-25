import {createTheme} from '@mui/material/styles';

const Theme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#6d6df5',
      },
      secondary: {
         main: '#ffdd40',
      },
   },
   appBar: {
      background: '#6d6df5',
   },
   app: {
      background: '#282c34',
   },
});

export default Theme;
