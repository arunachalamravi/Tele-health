import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Chip,
  TablePagination,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const AppointmentTable = (props) => {
  const { appoinmentList = [], tableheader = [], isAppoinment = true } = props;

  const [page, setPage] = useState(0);
  const rowsPerPage = 5;

  // Filter only Scheduled & Completed appointments
  //   const filteredAppointments = appoinmentList.filter(
  //     (item) =>
  //       item.status.toLowerCase() === "scheduled" ||
  //       item.status.toLowerCase() === "completed" ||
  //        item.status.toLowerCase() === "upcoming"
  //   );

  // Pagination logic
  const paginatedAppointments = appoinmentList.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Status color map
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "scheduled":
        return { bg: "#ff8638 !important", color: "#212121" }; // light blue
      case "completed":
        return { bg: "#43dc14 !important", color: "#212121" }; // light gray
      case "upcoming":
        return { bg: "#672a6c !important", color: "#212121" }; // light gray
      default:
        return { bg: "#FFF", color: "#000" };
    }
  };

  return (
    <Paper
      sx={{
        height: "74vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        boxShadow: "none !important",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        px: 1,
      }}
    >
      {paginatedAppointments?.length > 0 ? (
        <TableContainer sx={{ boxShadow: 0 }}>
          <Table sx={{ borderCollapse: "separate", borderSpacing: "0 4px" }}>
            <TableHead>
              <TableRow>
                {tableheader.map((col) => (
                  <TableCell
                    key={col.key}
                    sx={{
                      fontWeight: "bold",
                      color: "#212121",
                      borderBottom: "1px solid rgb(245 245 245)",
                      p: "10px",
                    }}
                  >
                    {col.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedAppointments.map((row, index) => {
                const statusColors =
                  isAppoinment === true ? getStatusColor(row.status) : "";
                return (
                  <TableRow
                    key={index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#f3f5f7",
                        borderRadius: "12px",
                      },
                      "& td": {
                        borderBottom: "none", // removes bottom line
                        fontSize: "14px",
                        padding: "12px",
                        color: "#212121",
                      },
                    }}
                  >
                    {tableheader.map((col) => (
                      <TableCell
                        key={col.key}
                        sx={{ textTransform: "capitalize" }}
                      >
                        {col.key === "status" ? (
                          <Chip
                            icon={
                              <FiberManualRecordIcon
                                sx={{ fontSize: "12px" }}
                              />
                            }
                            label={row[col.key]}
                            sx={{
                              "& .MuiChip-icon": {
                                color: statusColors.bg,
                              },
                              backgroundColor: "#f1f3f5",
                              color: statusColors.color,
                              fontWeight: "500",
                              borderRadius: "4px",
                              fontSize: "12px",
                              px: 1,
                            }}
                          />
                        ) : (
                          row[col.key]
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography
          sx={{
            height: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          No data found
        </Typography>
      )}

      {/* Pagination */}
      <TablePagination
        component="div"
        count={appoinmentList.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5]}
      />
    </Paper>
  );
};
