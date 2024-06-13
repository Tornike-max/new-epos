import { useQuery } from "@tanstack/react-query";
import { getSingleProductApi } from "../api/api";
import { useParams } from "react-router-dom";

export const useGetSingleProduct = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading: isProductPending,
    error,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getSingleProductApi(id || ""),
    enabled: !!id,
  });

  return { product, isProductPending, error };
};
