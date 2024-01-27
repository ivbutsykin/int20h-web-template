import { CircularProgress, Stack, Typography } from "@mui/material";
import Section from "../../molecules/Section/Section";

function ReactQuerySection({ data, isLoading }) {
  return (
    <Section title="Effortless data retrieval">
      <Stack alignItems="center">
        <Stack
          sx={{
            width: {
              xs: "100%",
              md: "80%",
            },
            overflow: "hidden",
          }}
        >
          {isLoading || !data ? (
            <Stack alignItems="center">
              <CircularProgress />
            </Stack>
          ) : (
            <Typography variant="body1">{JSON.stringify(data)}</Typography>
          )}
        </Stack>
      </Stack>
    </Section>
  );
}

export default ReactQuerySection;
