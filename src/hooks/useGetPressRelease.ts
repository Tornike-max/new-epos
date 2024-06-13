import { useQuery } from "@tanstack/react-query";
import { getReleaseApi } from "../api/api";

export const useGetPressRelease = () => {
  const { data: pressRelease, isPending: isPressReleasePending } = useQuery({
    queryKey: ["press"],
    queryFn: () => getReleaseApi(),
  });

  return { pressRelease, isPressReleasePending };
};
