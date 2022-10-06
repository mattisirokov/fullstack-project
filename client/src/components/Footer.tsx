import { Copyright } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Footer = () => {

return (
<Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Thank you, come again.
        </Typography>
        <Copyright />
      </Box>

)}

export default Footer