import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Stack,
  IconButton,
  Popper,
  Fade,
  Box,
  Badge,
} from "@mui/material";
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

const NotificationsButton = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;

  return (
    <>
      <IconButton size="large" color="primary" onClick={handleClick}>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        placement="bottom-end"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box sx={{ border: 1, p: 1, bgcolor: "primary" }}>
              The content of the Popper.
            </Box>
          </Fade>
        )}
      </Popper>
    </>
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
      <SearchButton />
      <NotificationsButton />
      </Stack>
    </div>
  );
};

export default Header;
