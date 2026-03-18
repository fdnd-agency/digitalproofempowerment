import { z } from "zod/v3";

const fileSchema = typeof File !== "undefined" ? z.instanceof(File) : z.any();

export const validationItems = z.object({
  firstname: z.string().min(2, "Name must be at least 2 characters long"),
  lastname: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Not a valid email address").default(""),
  message: z.string().min(10, "Message must be at least 10 characters long"),
  emailVerification: z.string().default(""), 
  photos: z.array(fileSchema).optional(),
  audio: z.array(fileSchema).optional(),
  location: z.array(fileSchema).optional(),
  note: z.array(fileSchema).optional(),
  document: z.array(fileSchema).optional(),
  chat: z.array(fileSchema).optional(),
  textArea: z.string().optional().default(""),
});

export const proofSchemaIdentified = validationItems
  .pick({
    email: true,
    emailVerification: true,
    photos: true,
    audio: true,
    location: true,
    note: true,
    document: true,
    chat: true,
    textArea: true,
  })
  .refine((data) => data.email === data.emailVerification, {
    message: "Emails don't match",
    path: ["emailVerification"],
  });

export const proofSchemaAnon = validationItems.pick({
  photos: true,
  audio: true,
  location: true,
  note: true,
  document: true,
  chat: true,
  textArea: true,
});
