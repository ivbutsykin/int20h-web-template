import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateTemplate from "../components/templates/PrivateTemplate";
import HomePage from "../components/pages/HomePage";
import NotFoundPage from "../components/pages/NotFoundPage";
import { ROUTE } from "../constants/router";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateTemplate />}>
          <Route path={ROUTE.HOME} element={<HomePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
