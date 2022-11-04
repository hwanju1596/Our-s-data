import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { Button, Stack, IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import NotificationsIcon from "@mui/icons-material/Notifications";

// const SearchButton = styled(Button)``;

const SearchButton = () => {
  return (
    <Button variant="outlined" startIcon={<SearchIcon />}>
      {" "}
      #(Hash tag) Search...{" "}
    </Button>
  );
};

const ToolbarUI = () => {
  return (
    <Toolbar>
      <SearchButton />
      <IconButton aria-label="delete" size="large" color="primary">
        <NotificationsIcon />
      </IconButton>
    </Toolbar>
  );
};

const Header = () => {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
      >
        <ToolbarUI />
      </Stack>
    </div>
  );
};

export default Header;
