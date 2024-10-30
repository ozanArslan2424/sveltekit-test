import { forgotPasswordSchema, type ForgotPasswordFormValues } from "$lib/schemas";
import { safeParse } from "$lib/zod";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request, cookies }) => {
		const parsed = await safeParse<ForgotPasswordFormValues>(
			await request.formData(),
			forgotPasswordSchema
		);

		if (!parsed.success) {
			console.log("Forgot password action failed: ", parsed);
			return {
				status: 400,
				body: parsed
			};
		}

		console.log("Forgot password action run: ", parsed);

		return {
			status: 200,
			body: parsed
		};
	}
} satisfies Actions;
