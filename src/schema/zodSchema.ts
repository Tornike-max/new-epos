import * as z from "zod";

export const schema = z.object({
  email: z.string().email("Invalid e-mail format"),
  message: z
    .string()
    .min(5, { message: "Message must be at least 5 characters long" }),
});
