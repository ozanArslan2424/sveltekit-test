<script lang="ts">
	// IMPORTS
	import { cn } from "$lib/utils";
	import type { HTMLAnchorAttributes } from "svelte/elements";

	// STYLES
	const styles = {
		variant: {
			def: "bg-primary text-primary-foreground border-primary bg-opacity-100 hover:bg-opacity-80 active:bg-opacity-90",
			secondary:
				"bg-secondary text-secondary-foreground border-secondary bg-opacity-100 hover:bg-opacity-80 active:bg-opacity-90",
			outline: "bg-muted text-foreground bg-opacity-0 hover:bg-opacity-30 active:bg-opacity-40",
			ghost:
				"bg-muted text-foreground border-transparent bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-50"
		},
		size: {
			sm: "py-1.5 px-3 text-sm",
			def: "py-2 px-4 text-base",
			lg: "py-3 px-5 text-lg",
			icon: "aspect-square h-10 w-10"
		}
	};

	// TYPES
	type LinkProps = {
		asButton?: boolean;
		variant?: keyof typeof styles.variant;
		size?: keyof typeof styles.size;
		loading?: boolean;
	} & HTMLAnchorAttributes;

	// PROPS
	let {
		asButton,
		variant = "def",
		size = "def",
		class: className,
		children,
		...rest
	}: LinkProps = $props();
</script>

<a
	{...rest}
	class={asButton
		? cn(
				"inline-flex items-center justify-center gap-2 rounded-md border outline-none ring-offset-1 transition focus-visible:ring-2",
				"disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-opacity-100 disabled:active:bg-opacity-100",
				styles.variant[variant],
				styles.size[size],
				className
			)
		: className}
>
	{@render children?.()}
</a>
