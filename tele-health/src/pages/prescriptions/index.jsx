/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";
import { AppointmentList, AppointmentTable } from "../../components";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { appointmentStyle } from "./style";
import { AppBar, InputField, SearchIcon, SelectedTab } from "../../atoms";
import axios from "axios";

const MyPerscriptionPage = () => {
  const tableheader = [
    { title: "Doctor", key: "doctor" },
    { title: "Medication", key: "medication" },
    { title: "Dosage", key: "dosage" },
    { title: "Start Date", key: "startDate" },
    { title: "End Date", key: "endDate" },
  ];
  const today = new Date();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("917"));
  const [prescriptionsData, setPrescriptionsData] = useState([]);
  const [search, setSearch] = useState("");
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    setSearch("");
  };

  const fetchAppointments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/prescriptions");
      console.log(res, "res");
      setPrescriptionsData(res?.data?.data || []);
    } catch (err) {
      console.error("Error fetching appointments:", err);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const filteredPerscription = useMemo(() => {
    const lowerSearch = search?.toLowerCase();
    return prescriptionsData.filter((item) =>
      item?.doctor?.toLowerCase()?.includes(lowerSearch)
    );
  }, [search, prescriptionsData]);

  console.log(search, "search");

  const getDisplayedAppointments = () => {
    if (tabIndex === 1) {
      return filteredPerscription.filter((p) => new Date(p.endDate) >= today);
    }
    if (tabIndex === 2) {
      return filteredPerscription.filter((p) => new Date(p.endDate) < today);
    }

    return filteredPerscription;
  };
  return (
    <>
      <Box sx={{ ...appointmentStyle?.rootSx }}>
        <AppBar Name="My Perscription" />
        {prescriptionsData?.length > 0 ? (
          <>
            <Box
              sx={{
                display: isMobile ? "block" : "flex",
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
                    count: filteredPerscription.length,
                  },
                  {
                    title: "New",
                    count: filteredPerscription.filter(
                      (p) => new Date(p.endDate) >= today
                    )?.length,
                  },
                  {
                    title: "Old",
                    count: filteredPerscription.filter(
                      (p) => new Date(p.endDate) < today
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
                  mt: isMobile ? 2 : 0,
                }}
              />
            </Box>

            <AppointmentTable
              tableheader={tableheader}
              isAppoinment={false}
              appoinmentList={getDisplayedAppointments()}
            />
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "64vh",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>
              Make sure the backend server is running locally to view the
              appointment list!
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default MyPerscriptionPage;
