import { useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import Section from "../../molecules/Section/Section";

function ReactErrorBoundarySection() {
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!isError) {
      return;
    }

    throw new Error("Error");
  }, [isError]);

  return (
    <Section title="React Error Boundary">
      <Stack alignItems="center">
        <Button variant="contained" color="error" onClick={handleClick}>
          Error
        </Button>
      </Stack>
    </Section>
  );

  function handleClick() {
    setIsError(true);
  }
}

export default ReactErrorBoundarySection;
