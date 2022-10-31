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
import {
  fetchUsersThunk,
  User,
  deleteOneUserThunk,
} from "redux/slices/usersSlice";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateModalUser from "./UpdateModalUser";

export default function BasicTable() {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state);

  const handleDelete = (Id: string) => {
    dispatch(deleteOneUserThunk(Id));
  };

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
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Admin status</TableCell>
                <TableCell align="right">Banned status</TableCell>
                <TableCell align="right">Delete user</TableCell>

                <TableCell align="right"></TableCell>
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

                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">
                    {user.isAdmin ? <div>Admin</div> : <div>Not admin</div>}
                  </TableCell>
                  <TableCell align="right">
                    {user.isBanned ? <div>Banned</div> : <div>Not banned</div>}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="Delete user"
                      onClick={() => {
                        handleDelete(user._id);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell align="right">
                    <UpdateModalUser />
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
      {users.allusers.length > 0
        ? handleTableRender(users.allusers)
        : "Loading..."}
    </div>
  );
}
