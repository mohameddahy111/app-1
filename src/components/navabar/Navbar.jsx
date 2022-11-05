import React from 'react';
import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Button,
} from '@mui/material';
import DropdownButton from './DropdownButton';

export default function Navbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Link href='/'>
              <Typography
                component={'h1'}
                variant='h1'
                sx={{ color: '#fff', textTransform: 'capitalize' }}
              >
                Electronic shop
              </Typography>
            </Link>
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Link href='/login' sx={{ color: '#f0c000' }}>
                <Typography component={'h4'} variant='h4'>
                  login
                </Typography>
              </Link>
              <DropdownButton categories={['action', 'comedy']} />
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
