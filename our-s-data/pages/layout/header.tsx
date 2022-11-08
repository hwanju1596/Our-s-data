import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  IconButton,
  Popper,
  Fade,
  Box,
  Badge,
  AppBar,
  Modal,
  Typography,
  styled,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import NotificationsIcon from "@mui/icons-material/Notifications";

// const SearchButton = styled(Button)``;

const SearchBox = styled(Box)(
  ({theme}) => `
    background-color:${theme.palette.primary.light};
    border-radius: 10px;
    top: 10%;
    left: 50%;
    position: absolute;
    box-shadow: 0 4px 6px;
    border: "2px solid #000";
    // filter: blur(4px);
    backdrop-filter: blur(10px);
`);

const backdropTest = styled('div')(
  ({theme}) => `
  backdrop-filter: blur(10px);
  `);

const SearchButton = () => {
  const [searchModalOpen, setSearchModalOpen] = React.useState(false);
  const handleOpen = () => setSearchModalOpen(true);
  const handleClose = () => setSearchModalOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        startIcon={<SearchIcon />}
      >
        {" "}
        #(Hash tag) Search...{" "}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={searchModalOpen}
        onClose={handleClose}
        closeAfterTransition
        // BackdropProps={ }
      >
        <Fade in={searchModalOpen}>
        <SearchBox>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </SearchBox>
        </Fade>
      </Modal>
    </>
  );
};

const NotificationsButton = () => {
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setNotificationOpen((previousOpen) => !previousOpen);
  };

  const canBeOpen = notificationOpen && Boolean(anchorEl);
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
        open={notificationOpen}
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
    <AppBar color="default">
      <Toolbar
        disableGutters
        sx={{
          minHeight: 64,
          left: 0,
          px: 2,
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <SearchButton />
        <NotificationsButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
