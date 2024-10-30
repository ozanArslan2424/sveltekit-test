<script lang="ts">
	// IMPORTS
	import { cn } from "$lib/utils";
	import type { HTMLFieldsetAttributes, HTMLInputAttributes } from "svelte/elements";

	// TYPES
	type RadioGroupProps = {
		name: string;
		defaultValue?: string;
		items: RadioItemProps[];
		errors?: string[];
	} & HTMLFieldsetAttributes;

	type RadioItemProps = {
		id: string;
		value: string;
		label: string;
	} & Omit<HTMLInputAttributes, "type" | "id" | "value" | "name">;

	// PROPS
	let { defaultValue, items, class: className, name, errors, ...rest }: RadioGroupProps = $props();

	// STATE
	let group = $state(defaultValue);
	const errored = $derived.by(() => errors && errors.length > 0);

	let selected = (value: string) => group === value;
</script>

<fieldset {...rest} class={cn("flex w-max flex-col gap-2", className)}>
	{#each items as { label, value, ...rest }}
		<label class="flex items-center gap-2 px-1">
			<button
				type="button"
				class={cn(
					"aspect-square h-3 w-3 rounded-full outline-none ring-1 ring-offset-2 transition duration-100 focus-visible:ring-2",
					selected(value) && "bg-primary"
				)}
				role="radio"
				aria-checked={selected(value)}
				aria-label={label}
				onclick={() => (group = value)}
			></button>
			<input {...rest} {value} {name} type="radio" bind:group class="hidden" />
			{label}
			{#if selected(value) && errored && errors}
				<span class="error-text">
					{#each errors as error}
						{error}{" "}
					{/each}
				</span>
			{/if}
		</label>
	{/each}
</fieldset>
