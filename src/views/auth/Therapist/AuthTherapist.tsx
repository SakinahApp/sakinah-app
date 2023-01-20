import { Box, Container } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const theme = createTheme();

function AuthTherapist(props: any) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          style={{
            background: "white",
            padding: "40px",
            borderRadius: 5,
          }}
     >
          <Outlet />
        </Container>
      </ThemeProvider>
    </Box>
  );
}

export default AuthTherapist;
