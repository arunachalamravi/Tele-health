import { SideBar } from "../../atoms";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function RootLayout(props) {
  const { showLayout } = props;
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("767")); // md ~ 960px (you can change to 767 manually)
  return (
    <Box>
      <Toaster />
      {showLayout && (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f3f5f7" }}>
          {!isMobile && <SideBar />}
          <Box
            sx={{
              bgcolor: "#f3f5f7",
              pl: isMobile  ? "0px" : "280px",
            }}
          >
            <Outlet />
          </Box>
        </Box>
      )}
    </Box>
  );
}

export { RootLayout };
