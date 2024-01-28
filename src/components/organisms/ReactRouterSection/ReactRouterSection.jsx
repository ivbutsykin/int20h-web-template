import { Link as RouterLink } from "react-router-dom";
import { Stack, Link } from "@mui/material";
import Section from "../../molecules/Section/Section";

function ReactRouterSection() {
  return (
    <Section title="React Router">
      <Stack alignItems="center">
        <Link component={RouterLink} to="/beyond-the-horizon">
          Link
        </Link>
      </Stack>
    </Section>
  );
}

export default ReactRouterSection;
