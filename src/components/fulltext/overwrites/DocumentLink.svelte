<script lang="ts">
	import Asset from '../../Asset.svelte';

	export let node: any;
	export let connections: any | undefined;
</script>

{#each connections as component}
	{#if component?.__typename == 'Asset' && node?.attrs?.documentId == component.id}
		<Asset {...component} />
	{/if}
{/each}
