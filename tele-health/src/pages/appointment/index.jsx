/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { AppointmentList, AppointmentTable } from "../../components";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { appointmentStyle } from "./style";
import { AppBar, InputField, SearchIcon, SelectedTab } from "../../atoms";
import axios from "axios";

const MyAppoinmentPage = () => {
  const tableheader = [
    { title: "Doctor", key: "doctor" },
    { title: "Date", key: "date" },
    { title: "Time", key: "time" },
    { title: "Type", key: "type" },
    { title: "Status", key: "status" },
  ]

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("1104")); 
  const [search, setSearch] = useState("");
  const [appoinmentList, setAppointmentList] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setSearch("")

  };

  const fetchAppointments = async () => {
    try {
      const res = await axios.get(`https://tele-health-git-master-arunachalams-projects-da6a402a.vercel.app/api/appointments`);
      console.log(res, "res");
      setAppointmentList(res?.data?.data || []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  
  useEffect(() => {
    fetchAppointments();
  }, []);

  const filteredAppointments = useMemo(() => {
    return appoinmentList?.filter(
      (app) =>
        app.doctor.toLowerCase().includes(search.toLowerCase()) ||
        app.status.toLowerCase().includes(search.toLowerCase()) ||
        app.type.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, appoinmentList]);

  const getDisplayedAppointments = () => {
    if (tabIndex === 1) {
      return filteredAppointments.filter(
        (app) => app.status?.toLowerCase() === "upcoming"
      );
    }
    if (tabIndex === 2) {
      return filteredAppointments.filter(
        (app) => app.status?.toLowerCase() === "scheduled"
      );
    }
    if (tabIndex === 3) {
      return filteredAppointments.filter(
        (app) => app.status?.toLowerCase() === "completed"
      );
    }
    return filteredAppointments;
  };
  return (
    <>
      <Box sx={{ ...appointmentStyle?.rootSx }}>
        <AppBar Name="My Appointments" />
        {appoinmentList?.length > 0 ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                ml: 1,
                mb: 2,
              }}
            >
              <SelectedTab
                tabIndex={tabIndex}
                handleTabChange={handleTabChange}
                list={[
                  {
                    title: "All",
                    count: filteredAppointments.length,
                  },
                  {
                    title: "Upcoming",
                    count: filteredAppointments.filter(
                      (app) => app.status?.toLowerCase() === "upcoming"
                    )?.length,
                  },
                  {
                    title: "Schedule",
                    count: filteredAppointments.filter(
                      (app) => app.status?.toLowerCase() === "scheduled"
                    )?.length,
                  },
                  {
                    title: "Completed",
                    count: filteredAppointments.filter(
                      (app) => app.status?.toLowerCase() === "completed"
                    )?.length,
                  },
                ]}
              />
              <InputField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
                startAdornment={<SearchIcon />}
                textFieldStyle={{
                  width: "320px",
                  mt:isMobile? 2:0
                }}
              />
            </Box>

            <AppointmentTable
              tableheader={tableheader}
              appoinmentList={getDisplayedAppointments()}
            />
          </>

          // <Grid container spacing={3}>
          //   {appoinmentList.map((value, index) => (
          //     <Grid item xs={12} sm={6} md={4} key={index}

          //     >
          //       <AppointmentList
          //         isDoctor
          //         doctor={value?.doctor}
          //         date={value?.date}
          //         time={value?.time}
          //         type={value?.type}
          //         status={value?.status}
          //         editDownIconShown={false}
          //         expanded={false}
          //       />
          //     </Grid>
          //   ))}
          // </Grid>
        ) : <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',height:'64vh'}}>
          <Typography sx={{fontSize:'16px'}}>Make sure the backend server is running locally to view the appointment list!</Typography>
          </Box>}
      </Box>
    </>
  );
};

export default MyAppoinmentPage;
