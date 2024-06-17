import { useQuery } from "@tanstack/react-query";
import { getHistoryApi } from "../api/api";

export const useGetHistory = () => {
  const { data: historyData, isPending: isHistoryPending } = useQuery({
    queryKey: ["gistory"],
    queryFn: () => getHistoryApi(),
  });

  return { historyData, isHistoryPending };
};
