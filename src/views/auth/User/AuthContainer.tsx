import { Box, Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import WelcomeMessage from "../../sakinah/User/Components/WelcomeMessage";

const theme = createTheme();

function AuthContainer(props: any) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <WelcomeMessage />
          <Outlet />
        </Box>
      </ThemeProvider>
    </Box>
  );
}

export default AuthContainer;
