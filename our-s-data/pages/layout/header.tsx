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
  TextField,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import NotificationsIcon from "@mui/icons-material/Notifications";

const SearchBoxStyle = styled(Box)(
  ({ theme }) => `
    background-color:${theme.palette.primary.light};
    border-radius: 10px;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
    border: "2px solid #000";
`);

const SearchBox = () =>
{
  return(
    <>
      <SearchIcon sx={{ fontSize: 40 }}/>
      <TextField   id="filled-hidden-label-normal" placeholder="HashTag Search..." hiddenLabel variant="filled"/>
    </>
  );
}

const SearchBoxOpenButton = () => {
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
        // 나중에 Backdrop Props 추가.
      >
        <Fade in={searchModalOpen}>
          <SearchBoxStyle>
            <SearchBox/>
          </SearchBoxStyle>
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
        <SearchBoxOpenButton />
        <NotificationsButton />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
