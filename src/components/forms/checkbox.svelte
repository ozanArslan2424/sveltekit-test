<script lang="ts">
	import { cn } from "$lib/utils";

	// IMPORTS
	import type { HTMLInputAttributes } from "svelte/elements";

	// TYPES
	type CheckboxProps = {
		label?: string;
		errors?: string;
	} & Omit<HTMLInputAttributes, "type" | "class">;

	// PROPS
	let { label, errors, ...rest }: CheckboxProps = $props();

	// STATE
	let checked: boolean = $state(false);
	const errored = $derived.by(() => errors && errors.length > 0);
</script>

<label class="flex w-max cursor-pointer flex-col gap-0.5 px-1">
	<div class="flex items-center gap-2">
		<button
			type="button"
			class={cn(
				"aspect-square h-3 w-3 rounded-sm outline-none ring-1 ring-offset-2 transition duration-100 focus-visible:ring-2",
				checked && "bg-primary"
			)}
			role="checkbox"
			aria-checked={checked}
			aria-label={label}
			onclick={() => (checked = !checked)}
		></button>
		<input {...rest} type="checkbox" bind:checked class="hidden" />
		{#if label}
			<span class="label-text">{label}</span>
			{#if errored && errors}
				<span class="error-text">
					{#each errors as error}
						{error}{" "}
					{/each}
				</span>
			{/if}
		{/if}
	</div>
</label>
