import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";
import { fetchProductsThunk, Product } from "redux/slices/productsSlice";

export default function BasicTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  const handleTableRender = (products: Product[]) => {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product name</TableCell>
                <TableCell align="right">Variant</TableCell>
                <TableCell align="right">Category</TableCell>

                <TableCell align="right">Available Sizes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>

                  <TableCell align="right">{product.variant}</TableCell>

                  <TableCell align="right">{product.category}</TableCell>

                  <TableCell align="center">
                    <ul>
                      {Object.values(product.sizes).map((sizes) => {
                        return <li key={JSON.stringify(sizes)}>{sizes}</li>;
                      })}
                    </ul>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  return (
    <div>
      {products.allproducts.length > 0
        ? handleTableRender(products.allproducts)
        : "Loading..."}
    </div>
  );
}
