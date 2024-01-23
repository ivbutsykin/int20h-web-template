import { Box, Stack, Typography } from "@mui/material";
import int20hLogo from "/int20h-logo.png";

function App() {
  return (
    <Stack alignItems="center" spacing={2}>
      <Box
        alt="INT20H logo"
        component="img"
        src={int20hLogo}
        sx={{ width: 280 }}
      />
      <Typography textAlign="center" variant="h1">
        INT20H
      </Typography>
    </Stack>
  );
}

export default App;
