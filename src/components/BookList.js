import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Book from "./Book";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { FakeBookList } from "./FakeBookList";

export default function BookList() {
  return (
    <Container>
      <Stack
        padding="100px"
        display="flex"
        direction="row"
        justifyContent="center"
      >
        <Book/>
        {FakeBookList.map((book, index) => (
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.laalcazaba.org/wp-content/uploads/2013/10/libro-arte.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div"></Typography>
              <Typography variant="body2" color="text.secondary">
                Leer es sexy
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
  ),
}
