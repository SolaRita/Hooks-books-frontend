import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FakeBookList } from './FakeBookList';

export default function Book () {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.amara.com/static/uploads/images-2/products/x/huge/1536214/aspen-style-book-909387.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Leer es sexy
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

/* {FakeBookList.map((item, index) => {
  return (
      <li key = {index}>
          <a className= {item.Title}>
          </a>
      </li>
  )})}   */