import { Container, Stack, Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import FramesWithMediaContentIllustration from "../../../assets/illustrations/techny-frames-with-media-content-1.png";
import ReactQuerySection from "../../organisms/ReactQuerySection/ReactQuerySection";
import ReactRouterSection from "../../organisms/ReactRouterSection/ReactRouterSection";
import FormikAndYupSection from "../../organisms/FormikAndYupSection/FormikAndYupSection";
import ReactErrorBoundarySection from "../../organisms/ReactErrorBoundarySection/ReactErrorBoundarySection";
import MuiPalleteModeSection from "../../organisms/MuiPalleteModeSection/MuiPalleteModeSection";
import I18nSection from "../../organisms/I18nextSection/I18nextSection";

function EntryTemplate() {
  const { t } = useTranslation();

  return (
    <Box py={8}>
      <Container>
        <Stack spacing={8}>
          <Stack spacing={4} alignItems="center">
            <Box
              component="img"
              sx={{
                height: {
                  xs: "160px",
                  md: "240px",
                },
              }}
              alt={t("template.entry.image.technyFrames")}
              src={FramesWithMediaContentIllustration}
            />
            <Stack spacing={2} alignItems="center">
              <Typography variant="h3" component="h1" align="center">
                {t("template.entry.title")}
              </Typography>
              <Typography variant="subtitle1" align="center">
                {t("template.entry.subtitle")}
              </Typography>
            </Stack>
          </Stack>

          <ReactQuerySection />

          <ReactRouterSection />

          <FormikAndYupSection />

          <ReactErrorBoundarySection />

          <MuiPalleteModeSection />

          <I18nSection />
        </Stack>
      </Container>
    </Box>
  );
}

export default EntryTemplate;
