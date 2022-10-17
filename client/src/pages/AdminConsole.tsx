import { Box, Grid } from "@mui/material";
import AdvancedNavbar from "../components/AdvancedNavbar";
import SalesCounter from "../components/SalesCounter";
import UserCounter from "../components/UserCounter";
import ProductCounter from "../components/ProductCounter";
import UserTable from "../components/UserTable";
import ProductTable from "../components/ProductTable";


const AdminConsole = () => {
  return (
    <div>
      <AdvancedNavbar />
      <Box m={2} pt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <SalesCounter />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <UserCounter />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <ProductCounter />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h3>Manage users</h3>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <UserTable />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h3>Manage products</h3>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ProductTable />
          </Grid>
         
          
        </Grid>
      </Box>
    </div>
  );
  
};

export default AdminConsole;
