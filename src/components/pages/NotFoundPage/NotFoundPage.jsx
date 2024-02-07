import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import LetteringTemplate from "../../templates/LetteringTemplate/LetteringTemplate";
import LetteringErrorIllustration from "../../../assets/illustrations/techny-lettering-error-404-with-warning-sign-and-wrench-text.png";

function NotFoundPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <LetteringTemplate
      image={
        <Box
          component="img"
          sx={{
            height: {
              xs: "160px",
              md: "240px",
            },
          }}
          alt={t("page.notFound.image.technyLettering")}
          src={LetteringErrorIllustration}
        />
      }
      title={t("page.notFound.title")}
      subtitle={t("page.notFound.subtitle")}
      buttonLabel={t("page.notFound.button.backToMain")}
      onButtonClick={() => navigate("/")}
    />
  );
}

export default NotFoundPage;
