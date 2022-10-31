import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { updateUserThunk } from "redux/slices/usersSlice";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { AppDispatch } from "redux/store";
import { fetchUserThunk } from "redux/slices/usersSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function UpdateModalUser() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch<AppDispatch>();

  



  return (
    <div>
      <Button onClick={handleOpen}>Update</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
            
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            label="First name"
            name="first name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            label="Last name"
            name="last name"
            autoFocus
          />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Banned status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Not banned"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Not banned"
                control={<Radio />}
                label="Not banned"
              />
              <FormControlLabel value="Banned" control={<Radio />} label="Banned" />
              
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Admin status</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Not admin"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Not banned"
                control={<Radio />}
                label="Not Admin"
              />
              <FormControlLabel value="Admin" control={<Radio />} label="Admin" />
              
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
