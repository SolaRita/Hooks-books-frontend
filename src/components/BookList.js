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
      <Stack padding= "100px" display="flex" direction="row" justifyContent="center">
        <Book/>
      </Stack>
    </Container>
  );
}
