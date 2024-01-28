import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { ROUTE } from "../../../constants/router";
import LetteringTemplate from "../../templates/LetteringTemplate/LetteringTemplate";
import TechnyLetteringIllustration from "../../../assets/illustrations/techny-lettering-error-404-with-warning-sign-and-wrench-text.png";

function NotFoundPage() {
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
          alt="Techny lettering error 404 with warning sign and wrench text"
          src={TechnyLetteringIllustration}
        />
      }
      title="Oops! Page Not Found"
      subtitle="It seems like you've taken a wrong turn. The page you're looking
              for might have been moved or doesn't exist."
      buttonLabel="Back to Home"
      onButtonClick={() => navigate(ROUTE.HOME)}
    />
  );
}

export default NotFoundPage;
