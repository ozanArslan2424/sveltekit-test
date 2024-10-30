<script lang="ts">
	let { children } = $props();
</script>

<div class="m-auto max-w-96 space-y-6 p-6 pt-8">
	{@render children()}
</div>
