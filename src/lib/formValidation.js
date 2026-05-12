import { z } from "zod/v3";

export const validationItems = z.object({
  firstname: z.string().min(2, "Name must be atleast 2 characters long"),
  lastname: z.string().min(2, "Name must be atleast 2 characters long"),
  email: z.string().email("Not a valid emailadress"),
  message: z.string().min(20, "Message must be atleast 10 characters long"),
});

export const proofSchema = z.object({
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  location: z.string().min(1, "Location is required"),
  houseNumber: z.string().optional(),
  postalCode: z.string().optional(),
});
