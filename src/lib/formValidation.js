import { z } from 'zod';

export const validationItems = z.object({
    firstname: z.string().min(2, "Name must be atleast 2 characters long"),
    lastname: z.string().min(2, "Name must be atleast 2 characters long"),
    email: z.string().email("Not a valid emailadress"),
    message: z.string().min(20, "Message must be atleast 10 characters long")
});