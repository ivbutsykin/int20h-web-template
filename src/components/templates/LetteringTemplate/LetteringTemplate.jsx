import { Box, Button, Container, Stack, Typography } from "@mui/material";
import TechnyLetteringIllustration from "../../../assets/illustrations/techny-lettering-error-404-with-warning-sign-and-wrench-text.png";

function HandlerTempalte({ title, subtitle, buttonLabel, onButtonClick }) {
  return (
    <Box py={8}>
      <Container>
        <Stack spacing={4} alignItems="center">
          <Box
            component="img"
            sx={{
              width: {
                xs: "50%",
                md: "30%",
              },
            }}
            alt="Techny Frames With Media Content 1"
            src={TechnyLetteringIllustration}
          />
          <Stack spacing={2} alignItems="center">
            <Typography variant="h3" component="h1" align="center">
              {title}
            </Typography>
            <Typography variant="subtitle1" align="center">
              {subtitle}
            </Typography>
            <Button variant="contained" onClick={onButtonClick}>
              {buttonLabel}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default HandlerTempalte;
