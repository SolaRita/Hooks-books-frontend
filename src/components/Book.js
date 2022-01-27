import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FakeBookList } from "./FakeBookList";

export default function Book(props) {
  console.log(props.img);
  return (
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
  );
}