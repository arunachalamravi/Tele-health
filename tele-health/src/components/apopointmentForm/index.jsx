import React, { useState } from "react";
import { Box, MenuItem, Button, Typography } from "@mui/material";
import { InputField } from "../../atoms";
import { ScheduleStyle } from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { paitentRoutes } from "../../routes";
const doctorList = [
  "Dr. John Smith",
  "Dr. Emily Johnson",
  "Dr. Michael Lee",
  "Dr. Sarah Brown",
  "Dr. David Wilson",
];

export const DoctorForm = () => {
  const today = new Date();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    type: "",
    hour: "",
    minute: "",
    period: "AM",
    error: {
      doctor: "",
      date: "",
      type: "",
      hour: "",
      minute: "",
      period: "",
    },
  });

  const isValidateForm = () => {
    let isValid = true;
    const error = { ...formData.error };

    if (!formData?.doctor) {
      error.doctor = "Select a doctor";
      isValid = false;
    } else {
      error.doctor = "";
    }

    if (!formData?.date) {
      error.date = "Select a date";
      isValid = false;
    } else {
      error.date = "";
    }

    if (!formData?.hour) {
      error.hour = "Select a hour";
      isValid = false;
    } else {
      error.hour = "";
    }

    if (!formData?.type) {
      error.type = "Choose appointment type";
      isValid = false;
    } else {
      error.type = "";
    }

    setFormData((prev) => ({ ...prev, error }));
    return isValid;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
      error: {
        ...prev.error,
        [field]: "",
      },
    }));
  };

  const clearField =()=>{
    setFormData({
    doctor: "",
    date: "",
    type: "",
    hour: "",
    minute: "",
    period: "AM",
    error: {
      doctor: "",
      date: "",
      type: "",
      hour: "",
      minute: "",
      period: "",
    },
  })
  }

  const handleSubmit = async () => {
    if (isValidateForm()) {
      try {
        const appointment = {
          doctor: formData.doctor,
          date: formData.date,
          time: `${formData.hour}:${formData.minute} ${formData.period}`,
          type: formData.type,
          status: new Date(formData.date) >= today ? "upcoming" : "Scheduled",
        };

        const res = await axios.post(
          "http://localhost:5000/api/createAppointment",
          appointment
        );

        if (res?.data?.success === true) {
          navigate(paitentRoutes?.myAppointments);
          clearField()
        } else {
          console.error("Error:", res?.data?.errors || "Unknown error");
        }
      } catch (error) {
        console.error("Error creating appointment:", error);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 400,
        margin: "20px auto",
        p: 3,
        borderRadius: 2,
        bgcolor: "#fff",
      }}
    >
      <Typography sx={{ fontSize: "14px", fontWeight: "500", mb: 3 }}>
        Schedule an Appointment
      </Typography>
      <Box sx={{ mb: 3 }}>
        <InputField
          select
          label="Select Doctor"
          value={formData.doctor}
          onChange={(e) => handleChange("doctor", e.target.value)}
          fullWidth
          sx={{ ...ScheduleStyle?.inputSx }}
          isError={formData?.error.doctor}
          errorMessage={formData?.error.doctor}
        >
          {doctorList.map((doctor) => (
            <MenuItem key={doctor} value={doctor}>
              {doctor}
            </MenuItem>
          ))}
        </InputField>
      </Box>

      <Box sx={{ mb: 3 }}>
        <InputField
          type="date"
          label="Select Date"
          value={formData.date}
          onChange={(e) => handleChange("date", e.target.value)}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ ...ScheduleStyle?.inputSx }}
          isError={formData?.error.date}
          errorMessage={formData?.error.date}
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <Box sx={{ display: "flex", gap: "33px", alignItems: "center" }}>
          <InputField
            select
            label="Hour"
            value={formData.hour}
            onChange={(e) => handleChange("hour", e.target.value)}
            sx={{ width: 100, ...ScheduleStyle?.inputSx }}
          >
            {[...Array(12)].map((_, i) => {
              const hour = (i + 1).toString().padStart(2, "0");
              return (
                <MenuItem key={hour} value={hour}>
                  {hour}
                </MenuItem>
              );
            })}
          </InputField>

          <InputField
            select
            label="Minute"
            value={formData.minute}
            onChange={(e) => handleChange("minute", e.target.value)}
            sx={{ width: 100, ...ScheduleStyle?.inputSx }}
          >
            {[0, 15, 30, 45].map((m) => {
              const minute = m.toString().padStart(2, "0");
              return (
                <MenuItem key={minute} value={minute}>
                  {minute}
                </MenuItem>
              );
            })}
          </InputField>

          <InputField
            select
            label="AM/PM"
            value={formData.period}
            onChange={(e) => handleChange("period", e.target.value)}
            sx={{ width: 120, ...ScheduleStyle?.inputSx }}
          >
            <MenuItem value="AM">AM</MenuItem>
            <MenuItem value="PM">PM</MenuItem>
          </InputField>
        </Box>

        {formData?.error.hour && (
          <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
            {formData?.error.hour}
          </Typography>
        )}
      </Box>

      <Box sx={{ mb: 3 }}>
        <InputField
          select
          label="Choose Appointment Type"
          value={formData.type}
          onChange={(e) => handleChange("type", e.target.value)}
          fullWidth
          sx={{ ...ScheduleStyle?.inputSx, ...ScheduleStyle?.inputSx }}
          isError={formData?.error.type}
          errorMessage={formData?.error.type}
        >
          <MenuItem value="In-person">In-person</MenuItem>
          <MenuItem value="Video">Video</MenuItem>
        </InputField>
      </Box>

      <Button
        variant="contained"
        sx={{
          ...ScheduleStyle?.buttonSx,
        }}
        onClick={handleSubmit}
      >
        Book Appointment
      </Button>
    </Box>
  );
};
