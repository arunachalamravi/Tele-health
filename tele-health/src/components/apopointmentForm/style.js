export const ScheduleStyle = {
  inputSx: {
    "& .Mui-focused": {
        color: "#313131",
      },
    "& .MuiOutlinedInput-input": {
      width: "100%",
      fontWeight: 400,
      border: "0px",
      
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
        border: "1.5px solid",
        borderColor: "#f2f2f2",
      },
      "&:hover fieldset": {
        borderColor: "#f2f2f2",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#f2f2f2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f2f2f2",
      },
    },
     "& input::placeholder": {
      fontSize: "14px",
      fontWeight: 400,
    },
  },
  buttonSx:{
          mt: 2,
          backgroundColor: "#313131",
          color: "#fff",
          boxShadow: "none",
          borderRadius: "8px",
  }
};
