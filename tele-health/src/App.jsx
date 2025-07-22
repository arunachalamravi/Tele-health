import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import RouterApp from "./routes/navigate";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RouterApp />
      </ThemeProvider>
    </>
  );
}

export default App;
