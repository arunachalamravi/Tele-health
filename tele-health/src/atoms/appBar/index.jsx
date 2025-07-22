import { useState } from "react";
import { CloseIcon, MenuIcon, NotificationIcon } from "../icons/icons";
import {
  Avatar,
  Badge,
  Box,
  Drawer,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { SideBar } from "../sidebar";
import { AppBar_style } from "./style";
import toast from "react-hot-toast";

export const AppBar = (props) => {
  const {
    rootStyle = {},
    className = "",
    navItems = [],
    Organizationlogo,
    Name = "",
    OrganizationNotificationPopupTitle = "",
    navStyle = {},
    handleHome,
    ...rest
  } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("767"));
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
  };

  const onNotification = () => {
    toast.success("Notification feature will available soon!");
  };

  return (
    <Box
      sx={{ ...AppBar_style.rootSx, ...rootStyle }}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          ...AppBar_style.navSx,
          ...navStyle,
          pl: isMobile ? "0px" : "280px",
        }}
      >
        <Stack direction="row" spacing={1} justifyContent={"space-between"}>
          <Box sx={AppBar_style.logoSx} onClick={handleHome}>
            <Box sx={{ display: "grid" }}>
              <Typography
                sx={{
                  color: "#313131",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                {Name}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ ...AppBar_style.logoSx }}>
            {isMobile ? (
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <IconButton onClick={onNotification}>
                  <Badge
                    color="error"
                    overlap="circular"
                    sx={AppBar_style.notificationSx}
                    variant={"dot"}
                  >
                    <NotificationIcon rootStyle={{ width: 20, height: 20 }} />
                  </Badge>
                </IconButton>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    ml: 2,
                  }}
                >
                  <Avatar
                    sx={{ backgroundColor: "#313131" }}
                    alt="A"
                    src="/static/images/avatar/1.jpg"
                  />
                  <Box sx={{ ml: 1 }}>
                    <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>
                      Arun R
                    </Typography>
                    <Typography sx={{ fontSize: "10px", fontWeight: "300" }}>
                      arun@gmail.com
                    </Typography>
                  </Box>
                </Box>
              </>
            )}
          </Box>
        </Stack>
      </Box>

      <Drawer
        sx={{
          width: 290,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 290,
            boxSizing: "border-box",
            position: "relative",
          },
        }}
        variant="temporary"
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box onClick={toggleDrawer(false)}>
          <Box
            sx={{
              position: "absolute",
              zIndex: "999",
              right: "22px",
              top: "16px",
            }}
          >
            <IconButton sx={{ mb: 1 }} onClick={toggleDrawer(false)}>
              <CloseIcon
                rootStyle={{ width: "14px", height: "16px", color: "#313131" }}
              />
            </IconButton>
          </Box>
          <SideBar navItems={navItems} />
        </Box>
      </Drawer>
    </Box>
  );
};
