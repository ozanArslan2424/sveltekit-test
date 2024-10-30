<script lang="ts">
	import Input from "$components/forms/input.svelte";
	import Button from "$components/ui/button.svelte";
	import Link from "$components/ui/link.svelte";

	let { form } = $props();
</script>

<h1 class="text-3xl font-bold">Login or Register</h1>

<form action="?/login" method="POST">
	<div class="flex flex-col gap-4 pb-6">
		<Input
			type="email"
			id="email"
			name="email"
			label="Email"
			value={form?.body.data?.email}
			errors={form?.body.errors?.email}
			autofocus
		/>
		<Input
			type="password"
			id="password"
			name="password"
			label="Password"
			value={form?.body.data?.password}
			errors={form?.body.errors?.password}
		/>
	</div>

	<div class="flex flex-col gap-2">
		<Button>Login</Button>
		<Button formaction="?/register" variant="secondary">Register</Button>
	</div>
</form>

<div class="">
	<Link href="/auth/forgot-password" class="hover:underline">Forgot password?</Link>
</div>
