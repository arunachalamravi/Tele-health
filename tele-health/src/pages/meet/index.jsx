import { useState } from "react";
import Webcam from "react-webcam";
import { Box, Button, Typography, Paper } from "@mui/material";
import { meet_style } from "./style";
import { AppBar } from "../../atoms";
import toast from "react-hot-toast";

export const MeetPage = () => {
  const [isCameraOn, setIsCameraOn] = useState(false);
  const JoinNow = () => {
    toast.success("Doctor Will Join Shortly !");
  };
  return (
    <Box sx={{ ...meet_style?.rootSx }}>
      <AppBar Name="Meet" />
      <Box gap={2} sx={{ ...meet_style?.videoSx }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></Box>
        <Button
          variant="contained"
          sx={{ ...meet_style?.buttonSx }}
          color={isCameraOn ? "error" : "primary"}
          onClick={() => setIsCameraOn(!isCameraOn)}
        >
          {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
        </Button>

        <Paper
          elevation={3}
          sx={{
            ...meet_style?.paperSx,
          }}
        >
          {isCameraOn ? (
            <Webcam
              audio={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Typography variant="body1" color="white">
              Camera is off
            </Typography>
          )}
        </Paper>

        <Button
          variant="contained"
          color={isCameraOn ? "error" : "primary"}
          onClick={JoinNow}
          sx={{ ...meet_style?.buttonSx }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};
