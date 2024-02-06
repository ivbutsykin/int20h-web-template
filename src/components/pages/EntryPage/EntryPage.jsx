import { enqueueSnackbar } from "notistack";
import EntryTemplate from "../../templates/EntryTemplate/EntryTemplate";
import { useGetUsers } from "./api";

function EntryPage() {
  const { data: usersData, isLoading: isGetUsersLoading } = useGetUsers();

  return (
    <EntryTemplate
      usersData={usersData}
      isGetUsersLoading={isGetUsersLoading}
      onUserSubmit={handleUserSubmit}
    />
  );

  function handleUserSubmit(values) {
    enqueueSnackbar(JSON.stringify(values));
  }
}

export default EntryPage;
