import { Container, Stack, Box, Typography } from "@mui/material";
import TechnyFramesIllustration from "../../../assets/illustrations/techny-frames-with-media-content-1.png";
import ReactQuerySection from "../../organisms/ReactQuerySection/ReactQuerySection";
import ReactRouterSection from "../../organisms/ReactRouterSection/ReactRouterSection";
import FormikAndYupSection from "../../organisms/FormikAndYupSection/FormikAndYupSection";

function HomeTemplate({ usersData, isGetUsersLoading, onUserSubmit }) {
  return (
    <Box py={8}>
      <Container>
        <Stack spacing={8}>
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
              src={TechnyFramesIllustration}
            />
            <Stack spacing={2} alignItems="center">
              <Typography variant="h3" component="h1" align="center">
                Hackathon Hero Toolkit
              </Typography>
              <Typography variant="subtitle1" align="center">
                Empowering innovation with a comprehensive codebase for rapid
                development
              </Typography>
            </Stack>
          </Stack>

          <ReactQuerySection data={usersData} isLoading={isGetUsersLoading} />

          <ReactRouterSection />

          <FormikAndYupSection onSubmit={onUserSubmit} />
        </Stack>
      </Container>
    </Box>
  );
}

export default HomeTemplate;
