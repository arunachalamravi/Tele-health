/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useMemo, useState } from "react";
import {
  DoctorForm,
} from "../../components";
import { Box } from "@mui/material";
import { appointmentScheduleStyle } from "./style";
import { AppBar } from "../../atoms";

const SchedulePage = () => {
  return (
    <>
      <Box sx={{ ...appointmentScheduleStyle?.rootSx }}>
        <AppBar Name="Schedule Appointments" />
        <DoctorForm />
      </Box>
    </>
  );
};

export default SchedulePage;
