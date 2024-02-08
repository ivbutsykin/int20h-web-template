import { enqueueSnackbar } from "notistack";
import { useGetUsers } from "../../../api/users";
import EntryTemplate from "../../templates/EntryTemplate/EntryTemplate";

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
