import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BookCard from './card';
import Grid from '@mui/material/Grid';
import Paper  from '@mui/material/Paper';


export default function BookCards() {
  return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,
      },
    }}
  >
    <BookCard elevation={5} />
    <BookCard />
    <BookCard elevation={5} />
  </Box>
);
};
