import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import apiClient from "../../../api/apiClient";
import { TODOS_URL, TODOS_KEY } from "./constants";

async function getTodos() {
  const res = await apiClient.get(TODOS_URL);
  return res.data;
}

export function useGetTodos() {
  return useQuery({
    queryKey: [TODOS_KEY],
    queryFn: getTodos,
  });
}

async function createTodo(data) {
  const res = await apiClient.post(TODOS_URL, data);
  return res.data;
}

export function useCreateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries(TODOS_KEY);
      enqueueSnackbar("Todo created successfully", { variant: "success" });
    },
  });
}
