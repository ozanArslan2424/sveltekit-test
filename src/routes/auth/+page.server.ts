import { authSchema, type AuthFormValues } from "$lib/schemas";
import { safeParse } from "$lib/zod";
import type { Actions } from "./$types";

export const actions = {
	login: async ({ request, cookies }) => {
		const parsed = await safeParse<AuthFormValues>(await request.formData(), authSchema);

		if (!parsed.success) {
			console.log("Login action failed: ", parsed);
			return {
				status: 400,
				body: parsed
			};
		}

		console.log("Login action run: ", parsed);

		return {
			status: 200,
			body: parsed
		};
	},
	register: async ({ request, cookies }) => {
		const parsed = await safeParse<AuthFormValues>(await request.formData(), authSchema);

		if (!parsed.success) {
			console.log("Login action failed: ", parsed);
			return {
				status: 400,
				body: parsed
			};
		}
		console.log("Register action run: ", parsed);

		return {
			status: 200,
			body: parsed
		};
	}
} satisfies Actions;
