<script lang="ts">
	import Input from "$components/forms/input.svelte";
	import Button from "$components/ui/button.svelte";

	let { form } = $props();
</script>

<h1 class="text-3xl font-bold">Reset your password</h1>

<form method="POST">
	<div class="flex flex-col gap-4">
		<Input
			type="email"
			id="email"
			name="email"
			label="Enter your email"
			description="You will receive a password reset link."
			value={form?.body.data?.email}
			errors={form?.body.errors?.email}
			autofocus
		/>

		<Button>Send Reset Link</Button>
	</div>
</form>
