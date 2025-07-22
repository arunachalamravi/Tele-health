import { Box, Typography } from "@mui/material";
import {
  PersonToPersonIcon,
  GoogleMeet,
} from "../../atoms";
import { appointmentList_style } from "./style";

export function AppointmentList(props) {
  const {
    doctor = "",
    icon,
    className = "",
    date = "",
    time = "",
    type = "",
    status = "",
    ...rest
  } = props;

  // Decide colors based on status
  const statusColor =
    status?.toLowerCase() === "completed" ? "#4fa91a" : "#facd6c"; // gray for completed, blue for upcoming
  const textColor =
    status?.toLowerCase() === "completed" ? "#8a8d91" : "#2c3e50"; // lighter gray for completed, dark for upcoming

  return (
    <Box
      sx={{
        ...appointmentList_style.rootSx,
           display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: 74,
      }}
      className={`${className}`}
      {...rest}
    >
      {/* Doctor name and status */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={appointmentList_style.titleSx}>
          {icon}
          <Typography sx={{ ...appointmentList_style.headerSx, color: textColor }}>
            {doctor}
          </Typography>
        </Box>
        <Typography
          sx={{
            ...appointmentList_style.dateSX,
            fontWeight: "bold",
            color: statusColor,
          }}
        >
          {status}
        </Typography>
      </Box>

      {/* Date, Time, and Type */}
      <Box
        sx={{
          ...appointmentList_style?.inpersonSx,
          justifyContent: "space-between",
          mt: 1,
        }}
      >
        <Box>
          <Typography sx={{ ...appointmentList_style.dateSX, color: textColor }}>
            {date}
          </Typography>
          <Typography sx={{ ...appointmentList_style.dateSX, color: textColor }}>
            {time}
          </Typography>
        </Box>

        <Box sx={{ ...appointmentList_style?.inpersonSx }}>
          <Box sx={{ mr: 1 }}>
            {type?.toLowerCase() === "in-person" ? (
              <PersonToPersonIcon rootStyle={{ color: statusColor }} />
            ) : (
              <GoogleMeet
                rootStyle={{
                  color: statusColor,
                  width: "18px",
                  height: "22px",
                }}
              />
            )}
          </Box>
          <Typography sx={{ ...appointmentList_style.dateSX, color: textColor }}>
            {type}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
