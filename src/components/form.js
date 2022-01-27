import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FakeBookList } from "./FakeBookList";

export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [price, setPrice] = useState("");
  const [cover, setCover] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const Form = { title, author, synopsis, price, cover };
    console.log(Form);
  };

  return (
    <form action="">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Author"
          variant="standard"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Synopsis"
          variant="standard"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Price"
          variant="standard"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Book Cover"
          variant="standard"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <Button
          variant="outlined"
          startIcon={<SaveIcon />}
          size="small"
          onClick={handleClick}
        >
          Save
        </Button>
      </Box>
    </form>
  );
}

// export default function LoadingButtonsTransition() {
//   const [loading, setLoading] = React.useState(false);
//   function handleClick() {
//     setLoading(true);
//   }

//   return (
//     <Box sx={{ '& > button': { m: 1 } }}>
//       <FormControlLabel
//         sx={{
//           display: 'block',
//         }}
//         control={
//           <Switch
//             checked={loading}
//             onChange={() => setLoading(!loading)}
//             name="loading"
//             color="primary"
//           />
//         }
//         label="Loading"
//       />
//       <LoadingButton
//         onClick={handleClick}
//         loading={loading}
//         variant="outlined"
//         disabled
//       >
//         disabled
//       </LoadingButton>
//       <LoadingButton
//         onClick={handleClick}
//         loading={loading}
//         loadingIndicator="Loading..."
//         variant="outlined"
//       >
//         Fetch data
//       </LoadingButton>
//       <LoadingButton
//         onClick={handleClick}
//         endIcon={<SendIcon />}
//         loading={loading}
//         loadingPosition="end"
//         variant="contained"
//       >
//         Send
//       </LoadingButton>

//     </Box>
//   );
// }
