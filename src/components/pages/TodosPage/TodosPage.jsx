import { useCreateTodo, useGetTodos } from "./api";
import TodosTemplate from "../../templates/TodosTemplate/TodosTemplate";

function TodosPage() {
  useGetTodos();
  const { mutate } = useCreateTodo();

  return <TodosTemplate onCreate={handleCreate} />;

  function handleCreate() {
    mutate({
      userId: 1,
      title: "Some important task",
      completed: false,
    });
  }
}

export default TodosPage;
