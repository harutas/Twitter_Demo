import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

const Header = () => {
    return (
        <>
            <Box>
                <AppBar position="static" theme={theme}>
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div">
                        Twitter Demo
                    </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: '#3d5afe',
    },
  },
});

export default Header