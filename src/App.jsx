import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import TodosPage from "./components/pages/TodosPage/TodosPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider />
      <TodosPage />
    </QueryClientProvider>
  );
}

export default App;
