export const inputBox_style = {
  textFieldSx: {
    backgroundColor: "#fff",
    borderRadius: "8px",

    opacity: 1,
    "& .MuiOutlinedInput-input": {
      width: "100%",
      fontWeight: 600,
      border: "0px",
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
        border: "0px solid",
      },
      "&:hover fieldset": {
        borderColor: "#f3f5f7",
      },
      "&.Mui-disabled fieldset": {
        borderColor: "#f3f5f7",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f3f5f7",
      },
    },
    "& .MuiFormHelperText-root": {
      mx: 0,
    },
    "& input::placeholder": {
      fontSize: "14px",
      fontWeight: 400,
    },
  },
};
