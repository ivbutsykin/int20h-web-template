import { Box, Button, Container, Stack, Typography } from "@mui/material";

function HandlerTempalte({
  image,
  title,
  subtitle,
  buttonLabel,
  onButtonClick,
}) {
  return (
    <Box py={8}>
      <Container>
        <Stack spacing={4} alignItems="center">
          {image}
          <Stack spacing={2} alignItems="center">
            <Typography variant="h3" component="h1" align="center">
              {title}
            </Typography>
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "80%",
                },
              }}
            >
              <Typography variant="subtitle1" align="center">
                {subtitle}
              </Typography>
            </Box>
          </Stack>
          <Button variant="contained" onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default HandlerTempalte;
