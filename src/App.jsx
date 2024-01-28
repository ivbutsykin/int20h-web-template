import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import Router from "./router/Router";

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider />
        <Router />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
