import * as React from "react";
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { fetchUsersThunk, User } from 'redux/slices/usersSlice';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "redux/store";

export default function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const { users } = useSelector((state: RootState) => state);

  React.useEffect(() => {
    dispatch(fetchUsersThunk());
  }, [dispatch]);
  

 const handleUserCounterRender = (users: User[]) => (
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
            NUMBER OF USERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {users.length}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
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
          16%
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
    {users.allusers.length > 0
      ? handleUserCounterRender(users.allusers)
      : "Loading..."}
  </div>
);
        
    };


