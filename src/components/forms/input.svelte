<script lang="ts">
	// IMPORTS
	import EyeClosed from "$assets/icons/eye-closed.svelte";
	import Eye from "$assets/icons/eye.svelte";
	import Button from "$components/ui/button.svelte";
	import { cn } from "$lib/utils";
	import type { HTMLInputAttributes } from "svelte/elements";
	import { fly } from "svelte/transition";

	// TYPES
	type InputProps = {
		type?: Omit<HTMLInputAttributes["type"], "checkbox" | "radio">;
		label?: string;
		description?: string;
		errors?: string[];
	} & Omit<HTMLInputAttributes, "class">;

	// PROPS
	let {
		type: typeProp = "text",
		label,
		description,
		errors,
		autocomplete: autocompleteProp,
		...rest
	}: InputProps = $props();

	// STATE
	let type: HTMLInputAttributes["type"] = $state(typeProp);
	let autocomplete: HTMLInputAttributes["autocomplete"] = $derived.by(() => {
		if (autocompleteProp) return autocompleteProp;
		switch (typeProp) {
			case "email":
				return "email";
			case "password":
				return "current-password";
			case "tel":
				return "tel";
			case "url":
				return "url";
			default:
				return "off";
		}
	});
	const errored = $derived.by(() => errors && errors.length > 0);

	// FUNCTIONS
	function handleShowPassword() {
		if (type !== "password") {
			type = "password";
			return;
		}

		type = "text";

		setTimeout(() => {
			type = typeProp;
		}, 2000);
	}
</script>

{#snippet input()}
	<input
		{...rest}
		class={cn(
			"h-10 flex-grow appearance-none rounded-md border bg-transparent px-3 py-1.5 outline-none ring-offset-1 transition focus-visible:border-transparent focus-visible:ring-2",
			errored && "border-red-500 border-opacity-100 ring-red-500 focus-visible:border-transparent"
		)}
		{type}
		{autocomplete}
	/>
{/snippet}

<label class="flex flex-col gap-1">
	{#if label}
		<span class="label-text">{label}</span>
	{/if}

	{#if typeProp === "password"}
		<div class="flex items-center gap-2">
			{@render input()}
			<Button
				onclick={handleShowPassword}
				variant="outline"
				size="icon"
				type="button"
				class="relative"
			>
				{#if type === "password"}
					<span
						transition:fly
						class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%-2px)]"
					>
						<EyeClosed />
					</span>
				{:else}
					<span transition:fly class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<Eye />
					</span>
				{/if}
			</Button>
		</div>
	{:else}
		{@render input()}
	{/if}

	{#if errored && errors}
		<span class="error-text">
			{#each errors as error}
				{error}{" "}
			{/each}
		</span>
	{:else if description}
		<span class="description-text">{description}</span>
	{/if}
</label>
