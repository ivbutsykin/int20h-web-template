import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import createTheme from "./theme/createTheme";
import Router from "./router/Router";
import useClientStore from "./store/clientStore";

const queryClient = new QueryClient();

function App() {
  const themeMode = useClientStore((state) => state.themeMode);

  const theme = createTheme({ mode: themeMode });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <QueryClientProvider client={queryClient}>
          <SnackbarProvider />
          <Router />
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
