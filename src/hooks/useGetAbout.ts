import { useQuery } from "@tanstack/react-query";
import { getAboutApi } from "../api/api";

export const useGetAbout = () => {
  const { data: aboutData, isPending: isAboutPending } = useQuery({
    queryKey: ["about"],
    queryFn: () => getAboutApi(),
  });

  return { aboutData, isAboutPending };
};
