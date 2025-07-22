import { Box, List, ListItemButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { sidebar_style } from "./style";
import { patientRoutes } from "../../routes";
import {
  ScheduleIcon,
  PrescriptionIcon,
  GoogleMeet,
  AppointmentListIcon,
  Logo,
} from "../icons/icons";

export const SideBar = (props) => {
  const { rootStyle = {}, className = "", ...rest } = props;
  const navigate = useNavigate();

  const gotoPage = (route) => {
    navigate(route);
  };

  const navItems = [
    {
      icon: <AppointmentListIcon />,
      seletedIcon: <AppointmentListIcon rootStyle={{ color: "#1c212d" }} />,
      path: patientRoutes?.myAppointments,
      title: "My Appointments",
    },
    {
      icon: <ScheduleIcon />,
      seletedIcon: <ScheduleIcon rootStyle={{ color: "#858786" }} />,
      path: patientRoutes?.schedule,
      title: "Schedule Appointment",
    },
    {
      icon: <PrescriptionIcon />,
      seletedIcon: <PrescriptionIcon rootStyle={{ color: "#858786" }} />,
      path: patientRoutes?.prescriptions,
      title: "My Prescriptions",
    },
    {
      icon: <GoogleMeet />,
      seletedIcon: <GoogleMeet rootStyle={{ color: "#858786" }} />,
      path: patientRoutes?.video,
      title: "Video Call",
    },
  ];

  return (
    <Box
      sx={{ ...sidebar_style.rootSx, width: "280px", ...rootStyle }}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...sidebar_style.totalheight }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            pt: "14px",
            pb: 1,

            cursor: "pointer",
            mx: 2,
            borderRadius: "8px",
          }}
        >
          <Box sx={{ ...sidebar_style.iconSx }}>
            <Logo
              rootStyle={{ width: "44px", height: "42px", color: "#313131" }}
            />
          </Box>
          <Typography sx={{ ...sidebar_style.menuSx, color: "#212121" }}>
            Tele Health
          </Typography>
        </Box>
        <Box sx={{ pt: { lg: 2, md: 2, sm: 0 }, pb: { sm: 10 } }}>
          {navItems.map((val, i) => (
            <List key={i}>
              <ListItemButton
                id={`sidebar_item_${i}`}
                onClick={() => gotoPage(val.path)}
                selected={val?.path === window.location.pathname}
                sx={{
                  ...sidebar_style.ListItemButtonSx,
                  "&.Mui-selected": {
                    backgroundColor: "#313131",
                    "& .MuiTypography-root": {
                      color: "#fff",
                    },
                    "& .MuiBox-root": {
                      color: "#fff",
                      svg: { fill: "#fff" },
                    },
                    "&:hover": {
                      backgroundColor: "#313131",
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#313131",
                    "& .MuiTypography-root": {
                      color: "#fff",
                    },
                    "& .MuiBox-root": {
                      color: "#fff",
                      svg: { color: "#fff" },
                    },
                  },
                }}
              >
                <Box sx={{ ...sidebar_style.iconSx }}>
                  {val?.path === window.location.pathname
                    ? val?.icon
                    : val?.seletedIcon}
                </Box>
                <Typography
                  sx={{
                    ...sidebar_style.menuSx,
                    color:
                      val?.path === window.location.pathname
                        ? "#fff"
                        : "#212121",
                  }}
                >
                  {val?.title}
                </Typography>
              </ListItemButton>
            </List>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
