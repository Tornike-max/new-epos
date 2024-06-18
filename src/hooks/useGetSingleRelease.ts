import { useQuery } from "@tanstack/react-query";
import { getSingleReleaseApi } from "../api/api";
import { useParams } from "react-router-dom";

export const useGetSingleRelease = () => {
  const { id } = useParams();

  const {
    data: release,
    isLoading: isReleasePending,
    error,
  } = useQuery({
    queryKey: ["release", id],
    queryFn: () => getSingleReleaseApi(id || ""),
    enabled: !!id,
  });

  return { release, isReleasePending, error };
};
