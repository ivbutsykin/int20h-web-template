import { Button, Stack } from "@mui/material";
import useClientStore from "../../../store/clientStore";
import Section from "../../molecules/Section/Section";

function MuiPalleteModeSection() {
  const toggleThemeMode = useClientStore((state) => state.toggleThemeMode);

  return (
    <Section title="MUI pallete mode">
      <Stack alignItems="center">
        <Button variant="contained" onClick={toggleThemeMode}>
          Toggle
        </Button>
      </Stack>
    </Section>
  );
}

export default MuiPalleteModeSection;
