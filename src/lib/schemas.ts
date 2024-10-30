import { z } from "zod";

export const authSchema = z.object({
	email: z
		.string()
		.email({ message: "Invalid email address." })
		.min(8, { message: "Email address is too short." }),
	password: z.string().min(6, { message: "Password needs to be at least 6 characters." })
});

export type AuthFormValues = z.infer<typeof authSchema>;

export const forgotPasswordSchema = z.object({
	email: z
		.string()
		.email({ message: "Invalid email address." })
		.min(8, { message: "Email address is too short." })
});

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;
