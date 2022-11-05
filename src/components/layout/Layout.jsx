import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../navabar/Navbar';

export default function Layout({ children, title }) {
  const theme = createTheme({
    typography: {
      h1: {
        
        
        fontWeight: 'bold',
        fontSize: '30px',
        textTransform: 'capitalize',
      },
      h2: {
        fontWeight: 'bold',
        fontSize: '20px',
        textTransform: 'capitalize',
      },
      h4: {
        fontWeight: 'bold',
        fontSize: '18px',
        textTransform: 'capitalize',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <title>{title ? `Movie - ${title}` : 'Movie'} </title>
      <header>
        <Navbar />
      </header>

      <main>{children}</main>
      <footer>kbdskhvb</footer>
    </ThemeProvider>
  );
}
