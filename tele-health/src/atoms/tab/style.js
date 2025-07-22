export const tab_Style = {
  rootSx: {

    minHeight: 36,
    "& .MuiTabs-flexContainer": {
      gap: "8px",
      flexWrap:'wrap'
    },
    "& .MuiTab-root": {
      minHeight: 36,
      minWidth: "80px",
      borderRadius: "8px",
      fontSize: "12px",
      fontWeight: "500",
      textTransform: "none",
      color: "#212121",
      backgroundColor: "#F0F0F1",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "#f2f2f2",
      },
      "&.Mui-selected": {
        backgroundColor: "#313131",
        color: "#fff",
      },
    },
    "& .MuiTabs-indicator": {
      display: "none", // Hide default underline indicator
    },
  },
};
