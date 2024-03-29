import { useQuery } from "@tanstack/react-query";
import apiClient from "./apiClient";
import { USERS_KEY, USERS_URL } from "../constants/users";

async function getUsers() {
  const res = await apiClient.get(USERS_URL, {
    params: {
      name: "Leanne Graham",
    },
  });
  return res.data;
}

export function useGetUsers() {
  return useQuery({
    queryKey: [USERS_KEY],
    queryFn: getUsers,
  });
}
