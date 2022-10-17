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
import { fetchUsersThunk, User } from "redux/slices/usersSlice";

export default function BasicTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);

  const handleTableRender = (users: User[]) => {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>First name</TableCell>
                <TableCell align="right">Surname</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Admin status</TableCell>
                <TableCell align="right">Banned status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.firstname}
                  </TableCell>

                  <TableCell align="right">{user.surname}</TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.isAdmin ? (
                    <div>Admin</div>
                  ) : (
                    <div>Not admin</div>
                  )}</TableCell>
                  <TableCell align="right">{user.isBanned ? (
                    <div>Banned</div>
                  ) : (
                    <div>Not banned</div>
                  )}</TableCell>
               
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
      {users.allusers.length > 0
        ? handleTableRender(users.allusers)
        : "Loading..."}
    </div>
  ) 
}
