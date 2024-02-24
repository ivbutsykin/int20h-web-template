import { CircularProgress, Stack, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetUsers } from "../../../api/users";
import Section from "../../molecules/Section/Section";

function ReactQuerySection() {
  const { t } = useTranslation();

  const { data: usersData, isLoading: isGetUsersLoading } = useGetUsers();

  return (
    <Section title={t("organism.reactQuerySection.title")}>
      <Stack alignItems="center">
        <Box
          sx={{
            width: {
              xs: "100%",
              md: "80%",
            },
            overflow: "hidden",
          }}
        >
          {isGetUsersLoading || !usersData ? (
            <Stack alignItems="center">
              <CircularProgress />
            </Stack>
          ) : (
            <Typography variant="body1">{JSON.stringify(usersData)}</Typography>
          )}
        </Box>
      </Stack>
    </Section>
  );
}

export default ReactQuerySection;
