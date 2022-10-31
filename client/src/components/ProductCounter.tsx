import * as React from "react";
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import { fetchProductsThunk, Product } from 'redux/slices/productsSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";

export default function Products() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

 const handleProductCounterRender = (products:Product[]) => (
  <Card>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            NUMBER OF PRODUCTS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {products.length}
          </Typography>
        </Grid>
        <Grid item>
        <Avatar
            sx={{
              backgroundColor: 'orange',
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          24%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

return (
  <div>
    {products.allproducts.length > 0
      ? handleProductCounterRender(products.allproducts)
      : "Loading..."}
  </div>
);
        
    };

   