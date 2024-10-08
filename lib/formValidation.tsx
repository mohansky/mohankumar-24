import { z } from "zod";

export const formSchema = z.object({
  senderName: z.string().trim().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().trim().email({
    message: "Invalid email.",
  }),
  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});
