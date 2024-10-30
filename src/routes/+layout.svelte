<script lang="ts">
	import Link from "$components/ui/link.svelte";

	import "$assets/styles.css";
	let { children } = $props();
</script>

<header class="fixed flex h-14 w-full items-center justify-between border-b px-8 shadow-sm">
	<nav>
		<ul class="flex items-center gap-2">
			<li><Link class="hover:underline" href="/">Home</Link></li>
		</ul>
	</nav>
	<Link asButton size="sm" variant="outline" href="/auth">Login</Link>
</header>

<main class="pt-14">
	{@render children()}
</main>
