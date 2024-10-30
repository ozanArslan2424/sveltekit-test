<script lang="ts">
	import { cn } from "$lib/utils";
	// IMPORTS
	import type { HTMLTextareaAttributes } from "svelte/elements";

	// TYPES
	type TextareaProps = {
		label?: string;
		description?: string;
		errors?: string;
	} & HTMLTextareaAttributes;

	// PROPS
	let { label, description, errors, class: className, ...rest }: TextareaProps = $props();

	// STATE
	const errored = $derived.by(() => errors && errors.length > 0);
</script>

<label class="flex flex-col gap-1">
	{#if label}
		<span class="label-text">{label}</span>
	{/if}

	<textarea
		{...rest}
		class={cn(
			"h-20 flex-grow appearance-none rounded-md border bg-transparent px-3 py-1.5 outline-none ring-offset-1 transition",
			"focus-visible:border-transparent focus-visible:ring-2",
			errors && "border-red-500 ring-red-500 focus-visible:border-transparent",
			className
		)}
	></textarea>

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
