import { Box } from "@mui/material";
import LetteringTemplate from "../../templates/LetteringTemplate/LetteringTemplate";
import TechnyWarningIllustration from "../../../assets/illustrations/techny-warning-icon.png";

function ErrorPage({ resetErrorBoundary }) {
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
          alt="Techny warning icon"
          src={TechnyWarningIllustration}
        />
      }
      title="Uh-Oh! Something Went Wrong"
      subtitle="We're sorry, but an unexpected error occurred. Our team has been notified, 
              and we're working to fix it as soon as possible. Please try again later."
      buttonLabel="Return to Previous Page"
      onButtonClick={resetErrorBoundary}
    />
  );
}

export default ErrorPage;
