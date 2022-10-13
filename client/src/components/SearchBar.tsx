import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { styled, alpha } from "@mui/material/styles";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { fetchProductSearch } from "redux/slices/productsSlice";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState("");
  const Navigate = useNavigate();

  const searchHandler = (e: any) => {
    if (query.trim()) {
      Navigate(`/products/search/${query}`);
    } else {
      Navigate(`/products`);
    }
  };
  useEffect(() => {
    dispatch(fetchProductSearch(query as string));
  }, [dispatch, query]);

  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <form onChange={searchHandler}>
          <StyledInputBase
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search"
          />
        </form>
      </Search>
    </div>
  );
}
