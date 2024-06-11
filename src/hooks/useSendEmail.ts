import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendEmail as sendEmailApi } from "../api/api";
import toast from "react-hot-toast";

export const useSendEmail = () => {
  const queryClient = useQueryClient();
  const { mutate: sendEmail, isPending: isSending } = useMutation({
    mutationFn: ({ message, email }: { message: string; email: string }) =>
      sendEmailApi(message, email),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["email"] });
      toast.success("Email Sended Successfully");
    },
    onError: () => {
      toast.error("Error While Sending email");
    },
  });

  return { sendEmail, isSending };
};
