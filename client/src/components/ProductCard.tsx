import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { fetchProductsThunk } from "../redux/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { Product } from "redux/slices/productsSlice";
import { Link } from "react-router-dom";

export default function ProductCard() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const handleCardRender = (products: Product[]) => {
    return (
      <Box m={2} pt={3}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {product.category}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link
                    to={`/products/${product.name}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  return (
    <div>
      {products.allproducts.length > 0
        ? handleCardRender(products.allproducts)
        : "Loading..."}
    </div>
  );
}
