import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import DashboardPage from "./components/pages/DashboardPage/DashboardPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider />
      <DashboardPage />
    </QueryClientProvider>
  );
}

export default App;
