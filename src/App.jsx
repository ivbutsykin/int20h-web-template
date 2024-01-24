import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TodosPage from "./components/pages/TodosPage/TodosPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodosPage />
    </QueryClientProvider>
  );
}

export default App;
