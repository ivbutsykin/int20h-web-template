import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../constants/router";
import LetteringTemplate from "../../templates/LetteringTemplate/LetteringTemplate";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <LetteringTemplate
      title="Oops! Page Not Found"
      subtitle="It seems like you've taken a wrong turn. The page you're looking
              for might have been moved or doesn't exist."
      buttonLabel="Back to Home"
      onButtonClick={() => navigate(ROUTE.HOME)}
    />
  );
}

export default NotFoundPage;
