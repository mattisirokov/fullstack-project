import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";

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

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add new product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Product details
          </Typography>
          
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Product name"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="variant"
            label="Product variant"
            name="variant"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="sizes"
            label="Product sizes"
            name="sizes"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Product description"
            name="description"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="category"
            label="Product category"
            name="category"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="image"
            label="Product image"
            name="image"
            autoFocus
          />

          <Button
            fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Add product
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
